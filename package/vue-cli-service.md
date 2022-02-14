### vue.config.js
vue.config.js是一个可选的配置文件，如果项目根目录存在这个文件，或被@vue/cli-service自动加载，也可以使用package.json中vue字段，但要严格遵照JSON格式编写。
```js
// vue.config.js
module.exports = {
  // 选项...
}
```
request type强类型
### baseUrl
Vue cli3.3 弃用，改用publicPath

### publicPath
Type: string    Default: '/'
部署应用包是基本URL。用法和webpack本身的output.publicPath一直，但Vue CLI在其余地方也需用到该值。请始终使用publicPath而不是修改webpack的output.publicPath
默认情况下，Vue CLI假设你的应用被部署在一个域名的根路径上，eg：https://www.example.com/ 如果被部署在子路径上，例如 https://www.example.com/project/ 则上古中古publicPath为/project/。设置publicPath未空字符串''或相对路径'./',所有资源都会被链接未相对路径，打包出来的包可以被部署再任意路径，也可以用再类似[cordova](http://cordova.axuer.com/) hybird应用的文件系统中

> 以下情况应当避免使用相对publicPath
> * 基于HTML5 history.pushState的路由时
> * 当使用[pages](#page)选项构建多页面应用时

### outputDir
Type: string    Default: 'dist'
运行vue-cli-service build时生成的生产环境构建文件的目录，目标目录在构建之前会被清除(构建时传入 ```--no-clean``` 可以关闭该行为)

### assetsDir
Type: string    Default: ''
放置生产的静态资源(js、css、img、fonts)的(相对与outputDir的)目录
>从生成的资源复写filename或chunkFilename时，assetsDir会被忽略

### indexPath
Type: string    Default: 'index.html'
指定生成的index.html的输出路径(相对于outputDir)。也可以是一个绝对路径。

### filenameHashing
Type: boolean    Default: 'true'
默认情况下，生成的静态资源在他们文件名中包含hash以便更好的控制缓存，然而这也要求index的HTML是被Vue CLI自动生成的。如果你无法使用Vue CLI生成的index HTML，你可以通过将这个选项设为false来关闭文件名hash

<a name="page"></a>
### pages
Type: Object    Default: undefined
在multi-page模式下构建应用。每个page应该有一个对应的javaScripte入口文件。其值应该是一个对象，key是入口名字，value是:

* 一个指定了**entry, template, filename, title和chunks**的对象(除entry之后都是可选的)
* 一个指定其entry的字符串

```js
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: 'src/subpage/main.js'
  }
}
```
> 当在multi-page模式下构建时，webpack配置会包含不一样的插件(这时会存在多个```html-webpack-plugin```和```preload-webpack-plugin```,如果要修改这些插件的选项，确认运行vue inspect)

### lineOnSave
Type: boolean | 'warning' | 'default' | 'error'
Default: 'default'
是否在开发环境下通过eslint-loader在每次保存时lint代码，会在```@vue.cli-plugin-eslint```被安装后生效
设置为true或'warning'时，eslint-loader会将lint错书输出为编译警告，默认情况下，警告仅仅会被输出到命令行，不会使得编译失败。
设置为'defalut'时，eslint-loader会将lint错误输出成编译错误，lint 错误在开发时直接显示在浏览器中，同时意味着lint错误将会导致编译失败。
设置为error时会使得 eslint-loader 把 lint 警告也输出为编译错误，这意味着 lint 警告将会导致编译失败。
也可以通过设置让浏览器 overlay 同时显示警告和错误：

```js
// vue.config.js
module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
```
当lintOnSave是一个truthy值时，eslint-loader在开发和生成构建下都会被启用。

### runtimeCompiler
Type: boolean    Default: false
是否使用包含运行时编译器的Vue构建版本，设置为true后你可以在Vue组件中使用template选项，但会让应用额外增加10kb左右
[Runtime + Compiler vs. Runtime only](https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6)

### transpiuleDependencies
Type: Array<string | RegExp>
Default: []
默认情况下babel-loader会忽略所有node_modules中的文件，如果想通过Babel显式转译一个依赖，可以在这个选项中列出

### productuinSourceMap
Type: boolean    Default: true
如果不需要生产环境的source map，可将其设置为false加速生产环境构建

### crossorigin
Type: string    Default: undefined
设置生成的HTML中`<link ref="stylesheet">和<script>`标签的crossorigin属性。
该选项仅影响由html-webpack-plugin在构建时注入的标签，直接写在模板(public/index.html)中的标签不受影响
more details: [CORS settings attributes](https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_settings_attributes)

### integrity
Type: boolean    Default: false
在生成的HTML中的`<link rel= "stylesheet">和<script>`标签上启用Subresource Integrity。如果构建的文件部署在CDN上，启用该系统可以提供额外安全性。
该选项仅影响html-webpack-plugin在构建时注入的标签，直接写在模板(public/index.html)中的标签不受影响。
启用SRI是，preload resource hints会被禁用，Chrome的bug会导致文件被下载两次。

### configureWebpack
Type: Object | Function
如果该值是一个对象，则会通过webpack-merge合并到最终的配置中
如果该值是一个函数，则会接收被解析的配置作为参数，该函数既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本
[webpack简单的配置方式](https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F)

### chainWebpack
Type: Function
是一个函数，会接收一个基于webpack-chain的ChainableConfig实例。允许对内部的webpack配置进行更细粒度的修改
[webpack 链式操作](https://cli.vuejs.org/zh/guide/webpack.html#%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%AB%98%E7%BA%A7)

### css.modules
v4起被弃用，css.requireModuleExtension，选项含义相反

### css.requireModuleExtension
Type: boolean    Default: true
默认情况下，只有*.module.[ext]结尾的文件才会被视作CSS Modules模块。设置为false后可去掉文件名中.module并将所有*.(css|scss|sass|less|styl(us)?)文件视为CSS Modules模块

### outputDir
Type: string    Default: 'dist'





减少打包 组件vue.config.js——Webpack的externals的使用
通过这种方式引入的依赖库，不需要webpack处理，编译进文件中，在我们需要，使用它的时候可以通过CMD、AMD、或者window全局方式访问。
eg：

```js
  configureWebpack: {
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      'element-ui': 'ELEMENT'
    }
  },
```

