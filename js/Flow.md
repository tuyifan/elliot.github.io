ECMAScripte标准定义了7种数据类型：
* 原始类型：
  * Boolean
  * Null
  * Undefined
  * Number
  * String
  * Symbol(es6)
* 对象类型Object
项目中使用：
  1. 通过注释
    `// @flow`或`/* @flow */ ` 注释之后的内容才能被flow检测
    `/*:number */`在需要检测的内容注释，说明器类型
    ```js
    // @flow
    let a /*: number */ = 3;
    ```
  2. 改写js结构(babel配置)
  .babelrc
   ```js
    {
    "presets": [
      "flow"
      ]
    }
   ```
   package.json文件中添加 "build": "babel ./src -d ./dist"
**flow 数据类型**
```js
number类型可以赋值的类型: 数值, NaN, Infinity `let a: number = NaN`
string类型
Boolean类型
void类型: 就是js中的undefined
null
Array类型 `let arr: Array<number> = []`, 需要指定array的元素类型
any类型, `let test: any = 任意数据`
```
```js
// @flow
//原始类型
function method1(x: number, y: string, z: boolean){
    //...
}
method1(3.14, "hello world", true)
// 对象类型
// @flow
function method1(x: number, y: string, z: boolean){
    //...
}
method1(3.14, "hello world", true)
// boolean 
fucntion acceptsBoolean(value: boolean){
    //...
}
acceptsBoolean(true) //works!
acceptsBoolean(false) //works!
acceptsBoolean("foo") //Error!
acceptsBoolean(Boolean("foo")) //works!
acceptsBoolean(!!"foo") //works!
// 当声明一个函数变量时, 说明这个变量是函数, 参数两个为数字, 返回值为数字
let temp = (a: number, b:number) => number;
// 最常见的ajax, 参数是函数时, 同时箭头后面代表返回值类型,// 不写默认是undefined
const ajax = (callback: (data: Object) => void) {

}
// maybe 
// 问号代表可以是null或者undefined, 函数没有声明返回值, 即返回值也可以是undefined
const test = (a: ?number) {
  console.log(a)
} 
// |操作 mixed types
let a = number|striing = 10;
a = 'abc'
// 靠近foo表示foo变量是否存在不确定，若存在，其值不能为null
function acceptsObject(value: { foo?: string }) {
      // ...
}
// 对象操作
const ajax = (option: { url:string, type: string, success:(data: Object) => void }) {

}
ajax()// 报错, 因为函数参数是对象
```
> flow只支持数字和字符串的隐藏转换
```js 
// @flow
"foo" + "foo"; // Works!
"foo" + 42;    // Works!
"foo" + {};    // Error!
"foo" + [];    // Error!
```
