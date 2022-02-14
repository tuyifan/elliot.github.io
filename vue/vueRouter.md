## $router
router是VueRouter对象，通过Vue.use(VueRouter)以及VueRouter构造函数得到的一个router实例对象
```js
  $router.push({path:'home'})
  $router.replace({path:'/login'})
```
## $route
route是跳转的路由对象。每一个路由都有一个route对象，是一个局部的对象，可获取对应的name,path,params,query等
```js
$route.path;
$route.params;
$route.query;
$route.router;
$route.matched;
$route.name;
```
## 路由懒加载
>打包工具采用bael时需要采用syntax-dynamic-import插件使babel能正确解析语法
```js
const router = new VueRouter({
  routes: [
    { 
        path: '/foo', 
        component: () => import('./Foo.vue')
    }]
})
```
## 组件按组分块
把某个路由下的所有组件都打包在同个异步块 (chunk) 中。使用 命名 chunk，(需要 Webpack > 2.4)。
```js
const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')
const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue')
```
Webpack 会将任何一个异步模块与相同的块名称组合到相同的异步块中。


## vue-router导航解析流程
![alt text](./img/vueRouter.webp "Title")


vue-router 运行模式
* **hash:** 使用URL hash作为路由，默认模式
* **history:** 依赖HTML5 history API和服务器配置。
* **abstract:** 支持所有javascript运行环境，如nodejs服务器端

## Hash模式
hash(#)是URL的锚点，代表的是网页中的一个位置。改变#后面的部分，浏览器会加载相应位置内容，不会重新加载网页。#对服务器端完全无用，HTTP请求不包括#。每次改变#后内容，会在浏览器访问历史中添加记录，回退按钮回到上一个位置。 **Hash模式通过锚点值的改变，根据不同的值，渲染指定DOM位置的不同数据**

## history模式
history模式下URL就像是正常的url，history.pushState API来完成url跳转而无须重新加载页面
```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```
history模式需要后台配置支持。当后台没有正确配置时，用户访问浏览器htp://mysite.com//user/id就会返回404。
```js
// 原生nodejs
// 所有请求都强制重定向到首页，服务器屏蔽了访问资源不存在的情况，将路由工作留给客户端处理。
const http = require('http')
const fs = require('fs')
const httpPort = 80

http.createServer((req, res) => {
  fs.readFile('index.htm', 'utf-8', (err, content) => {
    if (err) {
      console.log('We cannot open "index.htm" file.')
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    res.end(content)
  })
}).listen(httpPort, () => {
  console.log('Server listening on: http://localhost:%s', httpPort)
})
```
##### 客户端404兜底
```js
//优先级最低的兜底路由，不会影响精准匹配的路由配置
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '*', component: NotFoundComponent }
  ]
})
```
## abstract模式
abstract模式是使用一个不依赖于浏览器的浏览历史虚拟管理后端
在Weex环境中只支持abstract模式，vue-router会对环境做校验，如果没浏览器的API,vue-router会自动强制进入abstract模式。

#### hash模式与history模式
* pushState设置的新url可以是与当前url同源的任意url,而hash只可修改#后面的部分，故只可设置与当前同文档的url。
* pushState设置的新url可以与当前url一模一样，这样也会把记录添加到栈中，而hash设置的新值必须与原来不一样才会触发记录添加到栈中。
* pushState通过stateObject可以添加任意类型的数据记录中，而hash只可添加短字符串，pushState可额外设置title属性供后续使用。

|对比|hash路由|History API 路由|
|---|---|---|
|url字符串|丑|正常|
|命名限制|通常只能在同一个document下进行改变|url地址可以自己来定义，只要是同一个域名下都可以，自由度更大|
|url地址变更|会改变|可以改变，也可以不改变|
|状态保存|无内置方法，需要另行保存页面的状态信息|将页面信息压入历史栈时可以附带自定义的信息|
|参数传递能力|受到url总长度的限制|将页面信息压入历史栈时可以附带自定义的信息|
|实用性|可直接使用|通常服务端需要修改代码以配合实现|
|兼容性|IE8以上|IE10以上|