```html
<!--  vue sync -->
<component :v1.sync="bar"></component>
<component :v1="bar" @update:v1="v => bar = v"></component>
this.$emit('update:v1', v1)
```

* 两个文件相互引用导致浏览器识别最底层的引用值为undefined。
## export
```js
//直接输出
export var f1 = '123'
export var func1 = ()=>{console.log('func1')}

let f1 = '123'
let func1 = ()=>{console.log('func1')}
export {f1, func1}

import {f1, func} from './index.js




```


import 多个js文件相互嵌套不会报错而是智能处理
```js
//a.js
import {someB} from './b.js'
export const someA = 'aaa:' + someB

//b.js
import {someA} from './a.js'
export const someA = 'bbb:' + someB

//c.js
import {someB} from './b.js'
console.log(someB)

```
>c.js -> b.js -> a.js -> b.js -> a.js ...

js处理结果,发现循环的时候就结束了

>c.js -> b.js -> a.js $
* `$router.push('/')`在`this.setToken()`之前，会导致身份验证失败死循环
* 上线内容推送前本地测试
* jenkins package-lock.json影响包的安装，每次删除会导致npm再次下载内容
* 重构项目 同一域名下二级域名不同 LocalStorage的存在导致系统加载失败 / 浏览器不同 预期结果不一致 缓存 localstorage 路由
* mock全局定义修改xmlhttprequest， 导致responseType:blob不生效
* 预期异步操作后处理的函数应放在异步操作内部，否则会出现更新后属性值不变，与预期不符 +1 +1
* 插入 图片 压缩
* qs.stringfy undefined字段不会传递


* 联调前不确定的属性，字段先预留，待联调确定后决定。联调时间不确定，新增功能比还原功能困难
* 数据安全问题需要考虑

  >后端传掩码能保证拦截获取到的信息安全，前端无法实现该功能