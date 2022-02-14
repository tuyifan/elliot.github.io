## context

基础目录，**绝对路径**，用于从配置中解析入口点(entry point)和 加载器(loader)。

```js
const path = require('path');

module.exports = {
  //...
  context: path.resolve(__dirname, 'app')
};
```

默认使用当前目录，但是推荐在配置中传入一个值。这使得你的配置独立于 CWD(current working directory, 当前工作目录)。

------

## entry 

开始应用程序打包过程的一个或多个起点。如果传入数组，则会处理所有条目。

动态加载的模块 **不是** 入口起点。

简单规则：每个 HTML 页面都有一个入口起点。单页应用(SPA)：一个入口起点，多页应用(MPA)：多个入口起点。

```js
module.exports = {
  //...
  entry: {
    home: './home.js',
    about: './about.js',
    contact: './contact.js'
  }
};
```

### Naming 

如果传入一个字符串或字符串数组，chunk 会被命名为 `main`。如果传入一个对象，则每个属性的键(key)会是 chunk 的名称，该属性的值描述了 chunk 的入口点。

### Output filename 

默认情况下，入口 chunk 的输出文件名是从 [`output.filename`](https://webpack.docschina.org/configuration/output/#outputfilename) 中提取出来的，但你可以为特定的入口指定一个自定义的输出文件名。

```js
module.exports = {
  //...
  entry: {
    app: './app.js',
    home: { import: './contact.js', filename: 'pages/[name][ext]' },
    about: { import: './about.js', filename: 'pages/[name][ext]' }
  }
};
```

### Dependencies 

默认情况下，每个入口 chunk 保存了全部其用的模块(modules)。使用 `dependOn` 选项你可以与另一个入口 chunk 共享模块:

```js
module.exports = {
  //...
  entry: {
    app: { import: './app.js', dependOn: 'react-vendors' },
    'react-vendors': ['react', 'react-dom', 'prop-types']
  }
};
```

`app` 这个 chunk 就不会包含 `react-vendors` 拥有的模块了.

`dependOn` 选项的也可以为字符串数组：

```js
module.exports = {
  //...
  entry: {
    moment: { import: 'moment-mini', runtime: 'runtime' },
    reactvendors: { import: ['react', 'react-dom'], runtime: 'runtime' },
    testapp: {
      import: './wwwroot/component/TestApp.tsx',
      dependOn: ['reactvendors', 'moment'],
    },
  },
};
```

此外，你还可以使用数组为每个入口指定多个文件：

```js
module.exports = {
  //...
  entry: {
    app: { import: ['./app.js', './app2.js'], dependOn: 'react-vendors' },
    'react-vendors': ['react', 'react-dom', 'prop-types']
  }
};
```

### Dynamic entry 

如果传入一个函数，那么它将会在每次 [make](https://webpack.docschina.org/api/compiler-hooks/#make) 事件中被调用。

> 要注意的是，make 事件在 webpack 启动和每当 [监听文件变化](https://webpack.docschina.org/configuration/watch/) 时都会触发。

```js
module.exports = {
  //...
  entry: () => './demo'
};
```

或者

```js
module.exports = {
  //...
  entry: () => new Promise((resolve) => resolve(['./demo', './demo2']))
};
```

例如，你可以使用动态入口来从外部来源（远程服务器，文件系统内容或者数据库）获取真正的入口：

**webpack.config.js**

```js
module.exports = {
  entry() {
    return fetchPathsFromSomeExternalSource(); // 返回一个会被用像 ['src/main-layout.js', 'src/admin-layout.js'] 的东西 resolve 的 promise
  }
};
```

当和 [`output.library`](https://webpack.docschina.org/configuration/output/#outputlibrary) 选项结合：如果传入的是一个数组，只有数组的最后一个条目会被导出。

# 模式（Mode）

提供 `mode` 配置选项，告知 webpack 使用相应模式的内置优化。

```
string = 'production': 'none' | 'development' | 'production'
```

## 用法 

只需在配置对象中提供 `mode` 选项：

```javascript
module.exports = {
  mode: 'development'
};
```

或者从 [CLI](https://webpack.docschina.org/api/cli/) 参数中传递：

```bash
webpack --mode=development
```

支持以下字符串值：

| 选项          | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| `development` | 会将 `DefinePlugin` 中 `process.env.NODE_ENV` 的值设置为 `development`. 为模块和 chunk 启用有效的名。 |
| `production`  | 会将 `DefinePlugin` 中 `process.env.NODE_ENV` 的值设置为 `production`。为模块和 chunk 启用确定性的混淆名称，`FlagDependencyUsagePlugin`，`FlagIncludedChunksPlugin`，`ModuleConcatenationPlugin`，`NoEmitOnErrorsPlugin` 和 `TerserPlugin` 。 |
| `none`        | 不使用任何默认优化选项                                       |

如果没有设置，webpack 会给 `mode` 的默认值设置为 `production`。

###### Tip

请注意，设置 `NODE_ENV` 并不会自动地设置 `mode`。

### Mode: development 

```diff
// webpack.development.config.js
module.exports = {
+ mode: 'development'
- devtool: 'eval',
- cache: true,
- performance: {
-   hints: false
- },
- output: {
-   pathinfo: true
- },
- optimization: {
-   moduleIds: 'named',
-   chunkIds: 'named',
-   mangleExports: false,
-   nodeEnv: 'development',
-   flagIncludedChunks: false,
-   occurrenceOrder: false,
-   concatenateModules: false,
-   splitChunks: {
-     hidePathInfo: false,
-     minSize: 10000,
-     maxAsyncRequests: Infinity,
-     maxInitialRequests: Infinity,
-   },
-   emitOnErrors: true,
-   checkWasmTypes: false,
-   minimize: false,
-   removeAvailableModules: false
- },
- plugins: [
-   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
- ]
}
```

### Mode: production 

```diff
// webpack.production.config.js
module.exports = {
+  mode: 'production',
- performance: {
-   hints: 'warning'
- },
- output: {
-   pathinfo: false
- },
- optimization: {
-   moduleIds: 'deterministic',
-   chunkIds: 'deterministic',
-   mangleExports: 'deterministic',
-   nodeEnv: 'production',
-   flagIncludedChunks: true,
-   occurrenceOrder: true,
-   concatenateModules: true,
-   splitChunks: {
-     hidePathInfo: true,
-     minSize: 30000,
-     maxAsyncRequests: 5,
-     maxInitialRequests: 3,
-   },
-   emitOnErrors: false,
-   checkWasmTypes: true,
-   minimize: true,
- },
- plugins: [
-   new TerserPlugin(/* ... */),
-   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
-   new webpack.optimize.ModuleConcatenationPlugin(),
-   new webpack.NoEmitOnErrorsPlugin()
- ]
}
```

### Mode: none 

```diff
// webpack.custom.config.js
module.exports = {
+ mode: 'none',
- performance: {
-  hints: false
- },
- optimization: {
-   flagIncludedChunks: false,
-   occurrenceOrder: false,
-   concatenateModules: false,
-   splitChunks: {
-     hidePathInfo: false,
-     minSize: 10000,
-     maxAsyncRequests: Infinity,
-     maxInitialRequests: Infinity,
-   },
-   emitOnErrors: true,
-   checkWasmTypes: false,
-   minimize: false,
- },
- plugins: []
}
```

如果要根据 *webpack.config.js* 中的 **mode** 变量更改打包行为，则必须将配置导出为函数，而不是导出对象：

```javascript
var config = {
  entry: './app.js'
  //...
};

module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    //...
  }

  return config;
};
```