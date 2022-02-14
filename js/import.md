### import/export
||require|import|
|---|---|---|
|加载|运行时加载(动态加载)|编译时加载(静态加载)|
|导入|导入整个模块对象，不能仅导入部分内容|可以导入模块中所有导出内容或部分导出内容|
|导出|module.export后，导出的值不能再变化(拷贝)|export之后导出的值可以变化|
|书写位置|可以写在代码任何地方执行如if判断中|必须写在文件顶部|
|性能|性能较低,因为require是在运行时才引入模块并且赋值给某个变量|性能较高，因为import只需要依据import中的接口在编译时引入指定模块|

> Vue的路由懒加载在开发环境中热加载效率非常低下，所以需要区分环境配置。（vue-cli 3.X） 生产环境中import懒加载，开发环境require加载
### require
#### require()模块加载机制
在node中文件即模块，分为原生模块和3种文件模块。
具体加载顺序如下图
![require](./img/require.webp "require")
##### 缓存
require在第一次加载后会被缓存，每次调用require('foo')都会解析到同一文件，返回相同对象
##### 核心模块
核心模块定义在node.js源代码的lib目录下，require()总会优先加载核心模块。例如require('http')始终返回内置的HTTP模块，即使有同名文件
##### 文件模块
如果按确切文件名找不到模块，node.js会尝试带上.js,.json,.node拓展名再加载
> 当没有以'/'、'./'、'../'开头来表示文件时，这个模块必须是一个核心模块或加载自node_modules目录。

##### 目录作为模块
可以程序与库放到单独目录，提供一个单一的入口指向它，把目录递给require()作为一个参数。
```js
// package.json文件设置
{
  "name": "some-libary",
  "main": "./lib/some-libary.js"
}
```
如果设置在./some-libary目录，require('./some-libary')会试图加载./some-libary/lib/some-libary.js
如果目录没有package.json文件，或者main入口不存在或无法解析，则node.js将会试图加载目录下的index.js或index.node文件。
如果尝试失败，则node.js将会使用默认错误报告整个模块的缺失。
##### node_modules目录加载
如果传递给 require() 的模块标识符不是一个核心模块，也没有以 '/' 、 '../' 或 './' 开头，则 Node.js 会从当前模块的父目录开始，尝试从它的 /node_modules 目录里加载模块。 Node.js 不会附加 node_modules 到一个已经以 node_modules 结尾的路径上。
如果还是没有找到，则移动到再上一层父目录，直到文件系统的根目录。
如果在'/home/ry/projects/foo.js'文件调用require('bar.js)，依次调用如下:
```js
/home/ry/projects/node_modules/bar.js
/home/ry/node_modules/bar.js
/home/node_modules/bar.js
/node_modules/bar.js
```
##### 全局目录加载