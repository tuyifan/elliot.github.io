# node.js 依赖
五种依赖：
* dependencies
* devDependencies
* peerDependencies
* bundleDependencies
* optionalDependencies

## 版本号
除了bundledDependencies，其他四种都是需要写版本号的
三位版本号的定义 ”a.b.c“为例
a - 主要版本（大版本，major version）
    可能存在与低版本不兼容的api或用法
b - 次要版本（小版本，minor version）
    兼容大版本内的API和用法，应该对开发者透明，很少精确到小版本号
    大版本为0时包处于内测状态，可能小版本不兼容
c - 补丁（patch）
    一般用于修复bug或细小变更，需要向前兼容

##### ”1.2.3“ 
只依赖该版本，重要的线上项目中建议使用
ant-design彩蛋/npm挖矿可能避免
##### ”^1.2.3“  
系统生成的默认版本号,兼容除了最左侧的非 0 版本号之外的其他变化
* “^1.2.3” 等价于 “>= 1.2.3 < 2.0.0”
* “^0.2.3” 等价于 “>= 0.2.3 < 0.3.0”
* “^0.0.3” 等价于 “>= 0.0.3 < 0.0.4” 精确的 “0.0.3”
##### “~1.2.3”
^ 更加安全的小版本更新。如果列出了小版本号（第二位），则只兼容 patch（第三位）的修改；如果没有列出小版本号，则兼容第二和第三位的修改。
##### "1.x" 或者 "1." - 使用通配符
“1.x”, “1.*” 和 “1” 都表示要求大版本是 1，因此等价于 “>=1.0.0 < 2.0.0”。
“1.2.x”, “1.2.*” 和 “1.2” 都表示锁定前两位，因此等价于 “>= 1.2.0 < 1.3.0”。
#####  预发布关键词，如 alpha, beta, rc, pr 
“>1.2.4-alpha.1”，接受 “1.2.4” 版本所有大于1的 alpha 预发布版本。如 “1.2.4-alpha.7” 是符合要求的，但 “1.2.4-beta.1” 和 “1.2.5-alpha.2” 都不符合。此外如果是正式版本，只要版本号符合要求即可，不检查预发布版本号
“~1.2.4-alpha.1” 表示 “>=1.2.4-alpha.1 < 1.3.0”。这样 “1.2.5”, “1.2.4-alpha.2” 都符合条件，而 “1.2.5-alpha.1”, “1.3.0” 不符合。
“^1.2.4-alpha.1” 表示 “>=1.2.4-alpha.1 < 2.0.0”。这样 “1.2.5”, “1.2.4-alpha.2”, “1.3.0” 都符合条件，而 “1.2.5-alpha.1”, “2.0.0” 不符合。
## dependencies

```bash
npm i xxx -S
npm install xxx -save
```

## devDependencies
```bash
npm i xxx -D
npm install xxx -dev
```
### 预处理器
较典型的有 CSS 中的 less, stylus, sass, scss 等等，以及 JS 中的 coffee-script, babel 等等
### 测试工具
测试和开发同属于“线上状态不需要使用的依赖”
### 开发依赖
如 webpack-dev-server 支持开发热加载，babel-register 因为性能原因也不能用在线上。

## peerDependencies
插件能够直接调用宿主环境的依赖
**npm2:** 宿主环境去安装满足插件`peerDependencies`所指定依赖的包，然后在插件import或者require所依赖的包的时候，永远都是引用宿主环境统一安装的npm包，最终解决插件与所依赖包不一致的问题。
**npm3:** 不再要求peerDependencies所指定的依赖包被强制安装，相反在安装结束后检查本次安装是否正确，如果不正确会给用户打印警告提示。
!['np3 warning'](./img/npm-warning.jpg "title")

## bundledDependencies/bundleDependencies
eg:
```js
{
  "name": "awesome-web-framework",
  "version": "1.0.0",
  "bundledDependencies": [
    "renderized", "super-streams"
  ]
}
```
以压缩包的方式发布项目时, npm pack生成,npm install awesome-web-framework-1.0.0.tgz 时也会安装这两个依赖。
大部分项目都是从 npm registry 中搜索并引用依赖的，所以使用到的场景也相当少。

## optionalDependencies
”可选“的依赖。和 dependencies 相比：
* 即使这个依赖安装失败，也不影响整个安装过程
* 程序应该自己处理安装失败时的情况
一个依赖同时出现在 dependencies 和optionalDependencies 中，那么optionalDependencies 会获得更高的优先级

## package-lock.json
package-lock.json 内部记录的是每一个依赖的实际安装信息，例如名字，安装的版本号，安装的地址 (npm registry 上的 tar 包地址)等等。额外的，它会把依赖的依赖也记录起来，因此整个文件是一个树形结构，保存依赖嵌套关系
```json
{
  "name": "my-lib",
  "version": "1.0.0",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "array-union": {
      "version": "1.0.2",
      "resolved": "http://registry.npm.taobao.org/array-union/download/array-union-1.0.2.tgz",
      "integrity": "sha1-mjRBDk9OPaI96jdb5b5w8kd47Dk=",
      "dev": true,
      "requires": {
        "array-uniq": "^1.0.1"
      }
    }
  }
}

```
在执行 npm i 的时候，如果发现根目录下只有 package.json 存在（这通常发生在刚创建项目时），就按照它的记录逐层递归安装依赖，并生成一个 package-lock.json 文件。如果发现根目录下两者皆有（这通常发生在开发同事把项目 checkout 到本地之后），则 npm 会比较两者。如果两者所示含义不同，则以 package.json 为准，并更新 package-lock.json；否则就直接按 package-lock 所示的版本号安装。
* 在团队开发中，确保每个团队成员安装的依赖版本是一致的。否则因为依赖版本不一致导致的效果差异，一般很难查出来。
* 通常 node_modules 目录都不会提交到代码库，因此要回溯到某一天的状态是不可能的。但现在 node_modules 目录和 package.json 以及 package-lock.json 是一一对应的。所以如果开发者想回退到之前某一天的目录状态，只要把这两个文件回退到那一天的状态，再 npm i 就行了。
* 因为 package-lock.json 已经足以描述 node_modules 的大概信息（尤其是深层嵌套依赖），所以通过这个文件就可以查阅某个依赖包是被谁依赖进来的，而不用去翻 node_modules 目录（事实上现在目录结构打平而非嵌套，翻也翻不出来了）
* 在安装过程中，npm 内部会检查 node_modules 目录中已有的依赖包，并和 package-lock.json 进行比较。如果重复，则跳过安装，能大大优化安装时间。
