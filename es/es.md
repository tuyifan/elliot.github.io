<a id="top"></a>

### ES6

#### [1 let 和 const命令](#a1)
[1.1 let命令](#a1-1)  
[1.2 const命令](#a1-2)   
#### [2 变量的解构赋值](#a2)
[2.1 数组](#a2-1)  
[2.2 对象的解构赋值](#a2-2)  
[2.3 字符串的解构赋值](#a2-3)  
[2.4 数值和布尔值的解构赋值](#a2-4)  
[2.5 函数参数的解构赋值](#a2-5)  

#### [3 字符串的拓展](#a3)
[3.1 includes(),startsWith(),endsWith()](#a3-1)  
[3.2 repeat()](#a3-2)  
[3.3 padStart(),padEnd()](#a3-3)  
[3.4 模块字符串](#a3-4)  

#### [4 正则的拓展](#a4)
[4.1 介绍](#a4-1)  
[4.2 字符串的正则方法](#a4-2)  
[4.3 u修饰符](#a4-3)  
[4.4 y修饰符](#a4-4)  
[4.5 flags属性](#a4-5)  

#### [5 数值的拓展](#a5)
[5.1 Number.isFinite(), Number.isNaN()](#a5-1)  
[5.2 Number.parseInt(), Number.parseFloat()](#a5-2)  
[5.3 Number.isInteger()](#a5-3)  
[5.4 Math对象的拓展](#a5-4)  
[5.5 指数运算符](#a5-5)

#### [6 函数的拓展](#a6)
[6.1 参数默认值](#a6-1)  
[6.2 rest参数](#a6-2)  
[6.3 name属性](#a6-3)  
[6.4 箭头函数](#a6-4)  
[6.5 双冒号运算符](#a6-5)  
#### [7 数组的拓展](#a7)
[7.1 拓展运算符](#a7-1)  
[7.2 Array.from()](#a7-2)  
[7.3 Array.of()](#a7-3)  
[7.4 find()和findIndex()](#a7-4)  
[7.5 fill()](#a7-5)  
[7.6 entries(),keys(),values()](#a7-6)  
[7.7 includes()](#a7-7)  
[7.8 flat(),fflatMap()](#a7-8)  

#### [8 对象的拓展](#a8)
[8.1 属性的简介表示](#a8-1)  
[8.2 属性名表达式](#a8-2)  
[8.3 Object.is()](#a8-3)  
[8.4 Object.assign()](#a8-4)

#### [9 Symbol](#a9)
[9.1 介绍](#a9-1)  
[9.2 Symbol作为属性名](#a9-2)  
[9.3 应用：消除魔术字符串](#a9-3)  
[9.4 属性名遍历](#a9-4)  
[9.5 Symbol.for()、Symbol.keyFor()](#a9-5)  
[9.6 内置的Symbol值](#a9-6)  

#### [10 Set和Map数据结构](#a10)
[10.1 Set](#a10-1)  
[10.2 Set的应用](#a10-2)  
[10.3 Map](#a10-3)  
[10.4 Map与其他数据结构互相转换](#a10-4)

#### [11 Proxy](#a11)
[11.1 基础使用](#a11-1)  
[11.2 取消Proxy实例](#a11-2)  
[11.3 实现Web服务的客户端](#a11-3)  

#### [12 Promise对象](#a12)
[12.1 概念](#a12-1)  
[12.2 基本使用](#a12-2)  
[12.3 Promise.prototype.then()](#a12-3)  
[12.4 Promise.prototype.catch()](#a12-4)  
[12.5 Promise.prototype.finally()  ](#a12-5)
[12.6 Promise.all()](#a12-6)  
[12.7 Promise.race()](#a12-7)  
[12.8 Promise.resolve()](#a12-8)  

#### [13 Iterator和 for...of循环](#a13)
[13.1 Iterator遍历器概念](#a13-1)  
[13.2 Iterator遍历过程](#a13-2)  
[13.3 默认Iterator接口](#a13-3)  
[13.4 Iterator使用场景](#a13-4)  
[13.5 for...of循环](#a13-5)  
[13.6 跳出for...of](#a13-6)

#### [14 Generator函数和应用](#a14)
[14.1 基本概念](#a14-1)  
[14.2 yield表达式](#a14-2)  
[14.3 next方法](#a14-3)  
[14.4 for...of循环](#a14-4)  
[14.5 Generator.prototype.throw()](#a14-5)  
[14.6 Generator.prototype.return()](#a14-6)  
[14.7 next()/throw()/return()共同点](#a14-7)  
[14.8 yield* 表达式](#a14-8)  
[14.9 应用场景](#a14-9)  

#### [15 Class语法和继承](#a15)  
[15.1 基本概念](#a15-1)  
[15.2 介绍](#a15-2)  
[15.3 constructor()方法](#a15-3)  
[15.4 类的实例对象](#a15-4)  
[15.5 Class表达式](#a15-5)  
[15.6 私有方法和私有属性](#a15-6)  
[15.7 this指向问题](#a15-7)  
[15.8 Class的getter和setter](#a15-8)  
[15.9 Class的generator方法](#a15-9)  
[15.10 Class的静态方法](#a15-10)  
[15.11 Class的静态属性和实例属性](#a15-11)  
[15.12 Class的继承](#a15-12)  
#### [16 Module语法和加载实现](#a16)  
[16.1 介绍](#a16-1)  
[16.2 严格模式](#a16-2)  
[16.3 export命令](#a16-3)  
[16.4 import命令](#a16-4)  
[16.5 模块的整体加载](#a16-5)  
[16.6 export default 命令](#a16-6)  
[16.7 export 和 import 复合写法](#a16-7)  
[16.8 浏览器中的加载规则](#a16-8)  

**解构赋值概念:**ES6中，直接从数组和对象中取值，按照对应位置，赋值给变量的操作。
<a id="a1"></a>

### 1 let和const命令 [#](#top)
var 没有块级作用域，在块级作用域中用var定义的变量，会绑定到当前执行环境中，执行环境分为全局执行环境和当前执行环境
es6中，let表示变量，const表示常量，let与const都是块级作用域，且在当前作用域有效不能重复申明。
<a id="a1-1"></a>

#### 1.1 let命令 [§](#a1-1) [#](#top)
let与var用法相似，但let只在所在代码块内有效
* 不存在变量提升
* 不允许重复申明
```js
// basic usage
{
  let a = 1;
  let b = 2;
}
//变量提升
console.log(v1); // undefined
var v1 = 2;
console.log(v2); //ReferenceError
let v2 = 2;
//重复声明
// error
function f1 () {
  let a = 1;
  var a = 2;
}
function f2 () {
  let a = 1;
  let a = 2;
}
function f3 (a1) {
  let a1;
}
// success
function f4 (a2) {
  {
    let a2
  }
}
```
<a id="a1-2"></a>

#### 1.2 const命令 [§](#a1-2) [#](#top)
const声明只读常量
声明后无法修改值; 必须赋值; let不能重复定义
```js
const PI = 3.1415926
PI = 3  // error
const a //error
let PI - 0; //error
```
<a id="a2"></a>

### 2 变量的解构赋值 [#](#top)
<a id="a2-1"></a>

#### 2.1 数组 [§](#a2-1) [#](#top)


```js
let [a, b] = [1, 2];
let [a, [[b], c]] = [11, [[2], 3]]
consoel.log(a, b, c); // 1 2 3
let [ , , c] = [1, 2, 3]
consoel.log(c); // 3
let [a, ..b] = [1, 2, 3]
consoel.log(a, b); // 1 [2, 3]
let [a, b, ..c] = [1];
console.log(a, b, c); // 1, undefined, []
let [a = 1] = []; // a => 1
```

<a id="a2-2"></a>

#### 2.2 对象 [§](#a2-2) [#](#top)

对象结构不需严格按照顺序取值，按照变量名
```js
let {a} = {a:3, b:2, c:1}; // a => 3
let {a} = {b:2, c:1}; // a => undefined
let {a:b} = {a:1, c:2}; // a => error b => 1
let obj = {
  a: [1, {b: 2}]
};
let {a, a: [c, {b}]} = obj;
let {a, b = 1} {a: 2}; // a => 2
let {a = 1} = {a: undefined}; // a => 1
let {a = 1} = {a: null}; // a => null
// a => [1, {b: 2}], b => 2, c => 1
```
<a id="a2-3"></a>

#### 2.3 字符串的解构复制 [§](#a2-3) [#](#top)


```js
const [a, b, c, d, e] = 'hello';
// a => 'h'  b => 'e'  c => 'l'  d => 'l'  e => 'o'
let {length:len} = 'hello'; // len => 5
```
<a id="a2-4"></a>

#### 2.4 数值和布尔值的解构赋值 [§](#a2-4) [#](#top)

解构赋值的规则为，等号右边值不为数组或对象，将其转为对象，null和undefined无法转为对象。
```js
let {toString: s} = 123
s === Boolean.prototype.toString // true
let {toString: s} = true
s === Boolean.prototype.toString // true
let {prop: x} = undefined; // typeError
let {prop: y} = null; // typeError
```
<a id="a2-5"></a>

#### 2.5 函数参数的解构赋值 [§](#a2-5) [#](#top)

```js
function fun([a, b]) {
  return a + b;
}
fun([1, 2]); // 3
// 指定默认值解构
function fun({a = 0, b = 0} = {}) {
  return [a, b];
}
fun({a:1, b:2}); // [1, 2]
fun({a:1}); // [1, 0]
fun({}); // [0, 0]
fun(); // [0, 0]
function fun({a, b}) = {a: 0, b: 0}) {
  return [a, b];
}
fun({a:1, b:2}); // [1, 2]
fun({a:1}); // [1, undefined]
fun({}); // [undefined, undefined]
fun(); // [0, 0]
```

<a id="a3"></a>

### 3 字符串的拓展 [#](#top)
<a id="a3-1"></a>

#### 3.1 includes(),startsWidth(),endsWith() [§](#a3-1) [#](#top)

* includes()：返回布尔值，表示是否找到参数字符串。
* startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
* endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
```js
let a = 'hello world';
a.startsWith('world'); // false
a.endsWith('d'); // true
a.includes('or'); // true
a.startsWith('world', 6); // true
a.endsWith('o', 4); // true
a.includes('or', 8); // false
```
<a id="a3-2"></a>

#### 3.2 repeat() [§](#a3-2) [#](#top)

```js
'ab'.repeat(3); // 'ababab'
'ab'.repeat(0); // ''
'ab'.repeat(2.3); // 'abab'
'ab'.repeat(-1); // RangeError
'ab'.repeat(indefinity); // RangeError
'ab'.repeat(-0.5); // ''
'ab'.repeat(NaN); // ''
'ab'.repeat('ab'); // ''
'ab'.repeat('3'); // 'ababab'
```
<a id="a3-3"></a>


#### 3.3 padStart(), padEnd() [§](#a3-3) [#](#top)
padStart()头部补全， padEnd()尾部补全
2个参数 第一个指定字符串最小长度 第二个用于补全的字符串
```js
'x'.padStart(5, 'ab'); // 'ababx'
'x'.padEnd(5, 'ab'); // 'xabab'
'abcde'.padStart(5, 'ab'); // 'abcde'
'ab'.padStart(5, '12345'); // '123ab'
'x'.padStart(5); // '    x'
'x'.padEnd(5); // 'x    '
```
<a id="a3-4"></a>


#### 3.4 模板字符串 [§](#a3-4) [#](#top)
```js
let a = 'abc' + v1 + 'def'
let a = `abc${v1}def`
```

<a id="a4"></a>

### 4 正则的拓展 [#](#top)
<a id="a4-1"></a>

#### 4.1 介绍 [§](#a4-1) [#](#top)
* 参数是字符串，且第二个参数为正则表达式的修饰符
* 参数为正则表达式，返回一个原表达式的拷贝，且不能有第二个参数
```js
let a = new RegExp('abbc', 'i')
let a = new RegExp(/abx/i)
let a = /abx/i
let a = new RegExp(/abc/, 'i') //error
```
<a id="a4-2"></a>

#### 4.2 字符串的正则方法 [§](#a4-2) [#](#top)
match()、replace()、searrch()、split()

<a id="a4-3"></a>

#### 4.3 u修饰符 [§](#a4-3) [#](#top)
u修饰符为了处理大于uFFFF的Unicode字符，即正确处理四个字节的UTF-16编码
```js
/^\uD83D/u.test('\uD83D\uDC2A'); // false
/^\uD83D/.test('\uD83D\uDC2A'); // true

// .字符
let a = "𠮷";
/^.$/.test(a); // false
/^.$/u.test(a); // true

// unicode字符表示法
/\u{61}/.test('a'); // false
/\u{61}/u.test('a'); // true
/\u{20687}/u.test('𠮷'); // false

// 量词的使用
/a{2}/.test('aa'); // true
/𠮷{2}/.test('𠮷𠮷'); // false
/𠮷{2}/u.test('𠮷𠮷'); // true

// 修饰符不加u无法识别非规范的k字符
/[a-z]/i.test('\u212A') // false
/[a-z]/iu.test('\u212A') // true

// unicode 属性
const a = /hello/;
const b = /hello/u;
a.unicode // false;
b.unicode // true;
```
<a id="a4-4"></a>

#### 4.4 y修饰符 [§](#a4-4) [#](#top)
y修饰符与g修饰符类似，全局匹配，后一次匹配时从上一次匹成功的下一个位置开始。区别在于，g修饰符只要剩余位置存在匹配即可，y修饰符必须从剩余第一个开始
```js
let s = 'aaa_aa_a';
let r1 = /a+/g;
let r2 = /a+/y;
r1.exec(s) // ["aaa"]
r2.exec(s) // ["aaa"]

r1.exec(s) // ["aa"]
r1.exec(s) // null

//lastIndex属性指定匹配开始位置
r1.lastIndex = 1;
a.exec(s) // "aa"

//y修饰符只返回第一个匹配
'a1a2a3'.match(/a\d/y); // ["a1"]

//检查是否使用y修饰符
s.sticky; // true
```
<a id="a4-5"></a>

#### 4.5 flags属性 [§](#a4-5) [#](#top)
返回所有正则表达式的修饰符
```js 
/abc/ig.flags; // 'gi'
```

<a id="a5"></a>

### 5 数值的拓展 [#](#top)
<a id="a5-1"></a>

#### 5.1 Number.isFinite(), Number.isNaN() [§](#a5-1) [#](#top)
isFinite() 检查一个数值是否有限，参数不是Number类型，一律返回false
isNaN() 检测是否是NaN，若参数不是NaN，一律返回false
```js
Number.isFinite(10); // true
Number.isFinite(0.5); // true
Number.isFinite(10 / 0); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite('leo'); // false
Number.isFinite(true); // false
Number.isFinite(Math.random()); // true
Number.isNaN(NaN); // true
Number.isNaN(10); // false
Number.isNaN('10'); // false
Number.isNaN(true); // false
Number.isNaN(54 / NaN); // true
Number.isNaN('true' / 'true'); // true
Number.isNaN('true' / 0); // true
```

<a id="a5-2"></a>

#### 5.2 Number.parseInt(), Number.parseFloat() [§](#a5-2) [#](#top)
与全局方法parseInt()和parseFloat()一致，目的是逐步减少全局性的方法，让语言更模块化
```js
parseInt('123.45'); // 123
parseFloat('123.45'); // 123.45

Number.parseInt('123.45'); // 123
Number.parseFloat('123.45'); // 123.45

Number.parseInt === parseInt; // true
Number.parseFloat === parseFloat; // true
```


<a id="a5-3"></a>

#### 5.3 Number.isInteger() [§](#a5-3) [#](#top)
用来判断一个数值是否是整数，若参数不是数值，则返回false
```js
Number.isInteger(10); // true
Number.isInteger(10.0); // true
Number.isInteger(10.1); // false
```

<a id="a5-4"></a>

#### 5.4 Math对象的拓展() [§](#a5-4) [#](#top)
* **Math.trunc**
  用来去除小数的小数部分，返回整数部分。若参数为非数值，则先转为数值。若参数为空值或无法截取整数的值，则返回NaN。
  ```js
  // 正常使用
  Math.trunc(1.1); // 1
  Math.trunc(1.9); // 1
  Math.trunc(-1.1); // -1
  Math.trunc(-1.9); // -1
  Math.trunc(-0.1234); // -0

  // 参数为非数值
  Math.trunc('11.22'); // 11
  Math.trunc(true); // 1
  Math.trunc(false); // 0
  Math.trunc(null); // 0

  // 参数为空和无法取整
  Math.trunc(NaN); // NaN
  Math.trunc('leop'); // NaN
  Math.trunc(); // NaN
  Math.trunc(undefined); // NaN
  ```
* **Math.sign()**
  判断一个数是正数，负数还是零，对于分数值，会先转成数值。
  ```js
  Math.sign(-1); // -1
  Math.sign(1); // +1
  Math.sign(0); // 0
  Math.sign(-0); // -0
  Math.sign(NaN); // NaN
  Math.sign(''); // 0
  Math.sign(true); // +1
  Math.sign(false); // 0
  Math.sign(null); // 0
  Math.sign('9'); // +1
  Math.sign('leo'); // NaN
  Math.sign(); // NaN
  Math.sign(undefined); // NaN
  ```
* **Math.cbrt()**
  用来计算一个数的立方根，若参数为非数值则先转成数值
  ```js
  Math.cbrt(-1); // -1
  Math.cbrt(0); // 0
  Math.cbrt(1); // 1
  Math.cbrt(2); // 1.2599210498
  Math.cbrt('1'); // 1
  Math.cbrt('leo'); // NaN
  ```
* **Math.clz32()**
  返回一个数的32位无符号整数形式有多少个前导0
  ```js
  Math.clz32(0); // 32
  Math.clz32(1); // 31
  Math.clz32(1000); // 22
  Math.clz32(2); // 1.2599210498
  Math.clz32(0b01000000000000000000000000000000); // 1
  Math.clz32(0b00100000000000000000000000000000); // 2
  ```
* **Math.imul()**
  用于返回两个数以32位带符号整数形式相乘的结果，返回值也是一个32位的带符号整数
  ```js
  Math.imul(2, 4); // 8
  Math.imul(-1, 8); // -8
  Math.imul(-2, -2); // 4
  Math.imul(0xffffffff, 5); // -5
  ```
* **Math.fround()**
  返回一个数的2位单精度浮点数形式
  ```js
  Math.fround(0); // 0
  Math.fround(1); // 1
  Math.froundd(2 ** 24 - 1); // 16777215
  ```
* **Math.hypot()**
  返回所有参数的平方和的平方根
  ```js
  Math.hypot(3， 4); // 5
  Math.hypot(3, 4, 5); // 7.0710678118654755
  Math.hypot(); // 0
  Math.hypot(NaN); // NaN
  Math.hypot(3, 4, 'foo'); // NaN
  Math.hypot(3, 4, 5); // 7.0710678118654755
  Math.hypot('-3'); // 3
  ```
* **Math.expm1()**
  返回ex-1,Math.exp(x) - 1
  ```js
  Math.expm1(-1); // -0.6321205588285577
  Math.expm1(0); // 0
  Math.expm1(1); // 1.718281828459045
  ```
* **Math.log1p()**
  用来返回1+x的自然对数，即Math.log(1 + x)，如果x小于-1，返回NaN
  ```js
  Math.log1p(1); // 0.6931471805599453
  Math.log1p(0); // 0
  Math.log1p(-1); // -Infinity
  Math.log1p(-2); // NaN
  ```
* **Math.log10()**
  用来返回以 10为底的 x的对数。如果x小于 0，则返回 NaN。
  ```js
  Math.log10(2); // 0.3010299956639812
  Math.log10(1); // 0
  Math.log10(0); // -Infinity
  Math.log10(-2); // NaN
  Math.log10(100000); // 5
  ```
* **Math.log2()**
  用来返回以 2为底的 x的对数。如果x小于 0，则返回 NaN。
  ```js
  Math.log2(3); // 1.584962500721156
  Math.log2(2); // 1
  Math.log2(1); // 0
  Math.log2(0); // -Infinity
  Math.log2(-2); // NaN
  Math.log2(1024); // 10
  Math.log2(1 << 29); // 29
  ```
* **双曲函数方法**
双曲函数方法:
```Math.sinh(x)``` 返回x的**双曲正弦**（hyperbolic sine）
```Math.cosh(x)``` 返回x的**双曲余弦**（hyperbolic cosine）
```Math.tanh(x)``` 返回x的**双曲正切**（hyperbolic tangent）
```Math.asinh(x)``` 返回x的**反双曲正弦**（inverse hyperbolic sine）
```Math.acosh(x)``` 返回x的**反双曲余弦**（inverse hyperbolic cosine）
```Math.atanh(x)``` 返回x的**反双曲正切**（inverse hyperbolic tangent）

<a id="a5-5"></a>

#### 5.5 指数运算符 [§](#a5-5) [#](#top)
新增的指数运算符（**）
```js
2 ** 2; // 4
2 ** 2; // 8
2 ** 3 ** 2; // 相当于 2 ** (3 ** 2)); 返回512
```

<a id="a6"></a>

### 6 函数的拓展 [#](#top)
<a id="a6-1"></a>

#### 6.1 参数默认值 [§](#a6-1) [#](#top)
```js
function f(a, b='leo'){
  console.log(a, b)
}
f('hi'); // hi leo
f('hi', 'jack'); // hi jack
f('hi', ''); // hi leo
function f (a = 1){
  let a = 2; // error
}
function f (a, a ,b) { ... }; // 不报错
function f (a, a ,b = 1) { ... }; // 报错
// 函数的length属性 没有指定默认值的参数数量 且rest不计入
function f1 (a){ ... };
function f2 (a = 1){ ... };
function f3 (a, b = 2){ ... };
function f4 (...a){ ... };
function f5 (a, b, ...c){ ... };

f1.length; // 1
f2.length; // 0
f3.length; // 1
f4.length; // 0
f5.length; // 2
```

<a id="a6-2"></a>

#### 6.2 rest参数 [§](#a6-2) [#](#top)
rest参数形式位(...rest)，其值为一个数组，用于获取哈纳树多余函数，只能放在最后一位
```js
function f (a, ...b){
  console.log(a, b);
}
f(1, 2, 3, 4); // 1, [2, 3, 4]
function f(a, ...b, c){ ... }; // 报错
```
<a id="a6-3"></a>

#### 6.3 name属性 [§](#a6-3) [#](#top)
返回该函数的函数名
```js
function f () { ... };
f.name; // f
const f = function g () { ... };
f.name; // g
```
<a id="a6-4"></a>

#### 6.4 箭头函数 [§](#a6-4) [#](#top)
* 箭头函数内的 this总是指向定义时所在的对象，而不是调用时。
* 箭头函数不能当做构造函数，即不能用 new命令，否则报错。
* 箭头函数不存在 arguments对象，即不能使用，可以使用 rest参数代替。
* 箭头函数不能使用 yield命令，即不能用作Generator函数。
不适用场景：
1. 在定义函数方法，且该方法内部包含 this。
2. 需要动态 this时。

#### 6.5 双冒号运算符 [§](#a6-5) [#](#top)
<a id="a6-5"></a>

::暂时提案，用于解决一些不适应的场合，取代call，apply，bind调用
左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境(即 this对象)，绑定到右边函数上。
```js
f::b;
// 等同于
b.bind(f);

f::b(...arguments);
// 等同于
b.apply(f, arguments);

// 左边为空，右边为对象方法时，等于将该方法绑定到该对象上
let f = a::a.b;
// 等同于
let f = ::a.b;
```

<a id="a7"></a>

### 7 数组的拓展 [#](#top)
<a id="a7-1"></a>

#### 7.1 拓展运算符 [§](#a7-1) [#](#top)
拓展运算符使用( ...)，类似 rest参数的逆运算，将数组转为用( ,)分隔的参数序列。

```js
function f(a, b, c){ ... };
var a = [1, 2, 3];
f.apply(null, a);
f(...a);
```

**拓展运算符的运用**
* 复制数组
* 合并数组
* 与解构赋值结合


<a id="a7-2"></a>

#### 7.2 Array.from() [§](#a7-2) [#](#top)
将 **类数组对象** 和 **可遍历对象** ，转换成真正的数组
```js
// 类数组对象
let a = {
  '0': 'a',
  '1': 'b',
  length: 2
}
let arr = Array.from(a);

// 可遍历的对象
let a = Array.from([1, 2, 3]);
let b = Array.from({length: 3});
let c = Array.from([1, 2, 3]).map(x => x * x);
let d = Array.from([1, 2, 3].map(x => x * x));
```

<a id="a7-3"></a>

#### 7.3 Array.of() [§](#a7-3) [#](#top)
将一组数值，转换成数组，弥补 Array方法参数不同导致的差异。
```js
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(1).length; // 1
Array(); // []
Array(2); // [,] 1个参数时，为指定数组长度
Array(1, 2, 3); // [1, 2, 3] 多余两个参数，组成新数组
```
<a id="a7-4"></a>

#### 7.4 find()和findIndex() [§](#a7-4) [#](#top)
find()方法用于找出第一个符合条件的数组成员，参数为一个回调函数，所有成员依次执行该回调函数，返回第一个返回值为true的成员，如果不符合则返回undefined
回调函数接受三个参数，当前值，当前位置和原数组
findIndedx()与find()类似，返回第一个符合条件的数据成员位置，都不符合返回-1
```js
[1, 2, 3, 4, 5].find((value, index, arr) => a < 3); // 1
```

<a id="a7-5"></a>

#### 7.5 fill() [§](#a7-5) [#](#top)
用于用指定值填充一个数组，通常用来初始化空数组，并抹去数组中已有的元素。第二个和第三个参数指定填充的起始位置和结束位置。

```js
new Array(3).fill('a'); // ['a', 'a', 'a']
[1, 2, 3].fill('a'); // ['a', 'a', 'a']
[1, 2, 3].fill('a', 1, 2); // [1, 'a', 3]
```

<a id="a7-6"></a>

#### 7.6 entries(),keys(),values() [§](#a7-6) [#](#top)
用于遍历数组， entries()对键值对遍历， keys()对键名遍历， values()对键值遍历。

```js
for (let i of ['a', 'b'].keys()){
  console.log(i);
}
// 0
// 1

for (let e of ['a', 'b'].values()){
  console.log(e);
}
// 'a'
// 'b'

for (let i of ['a', 'b'].entries()){
  console.log(i);
}
// 0 'a'
// 1 'b'
```
<a id="a7-7"></a>

#### 7.7 includes() [§](#a7-7) [#](#top)
表示数组是否含有给定的值，与字符串includes用法一致，第二个参数为起始位置，默认为0，负数表示倒数位置，大于数组长度则从0开始
```js
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(54); // false
[1, 2, NaN].includes(NaN); // true
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, 4); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, 3].includes(3, -4); // true
```

<a id="a7-8"></a>

#### 7.8 flat(),flatMap() [§](#a7-8) [#](#top)
flat()用于将数组一维化，返回一个新数组，不影响原数组。传参为一维化层次，infinity全部一维化，flatMap()将原数组每个对象执行一个函数，再对返回值组成的数组进行flat()方法，返回新数组，不改变原数组，flatMap()只展开一层
```js
[1, 2, [2, 3]].flat(); // [1, 2, 2, 3]
[1, 2, [3, [4, [5, 6]]]].flat(3); 
// [1, 2, 3, [4, [5, 6]]] -> [1, 2, 3, 4, [5, 6]] -> [1, 2, 3, 4, 5, 6, 7, 8]
[1, 2, [3, [4, [5, 6]]]].flat('infinity'); // [1, 2, 3, 4, 5, 6, 7, 8]
[2, 3, 4].flatMap(x => [x, x+1]); // [2, 3, 3, 4, 4, 5]
[2, 3, [4]].flatMap(x => {
  console.log(typeof x)
  if (typeof x == 'number') {
    return [x, x+1]
  }
  return x
}); // [2, 3, 3, 4, 4]
```

<a id="a8"></a>

### 8 对象的拓展 [#](#top)
<a id="a8-1"></a>

#### 8.1 属性的简介表示 [§](#a8-1) [#](#top)
```js
let a = 'a1';
let b = {a};
// 相当于
let b = {a: a};
function f(a, b){
  return {a, b};
}
// 等同于
function f (a, b){
  return {a: a, b: b}
}
let a - {
  fun () {
    return 'hello';
  }
}
//等同于
let a = {
  fun: function(){
    return 'hello';
  }
}
```
<a id="a8-2"></a>

#### 8.2 属性名表达式 [§](#a8-2) [#](#top)
```js
属性名表达式不能与简洁表示法同时使用，否则报错
// 标识符作为属性名
a.f = 1；
// 字符串作为属性名
a['f' + 'un'] = 1;
let a="hello world";
let b = {
  [a]: 1,
  ['a' + 'bc']: 123,
  ['my' + 'fun']() {
    return 'hello world';
  }
}
// b.a->undefined; b.abc->123; b.myfun()->'hello world'; 
// b[a] -> 1; b['abc'] -> 123; b[a] -> 1; b['myfun']() -> 'hello world';
let a1 = 'aa';
let a2 = 'bb';
let b1 = {[a1]};
let a1 = 'aa';
let b1 = {[a1]: 'bb'};
```
<a id="a8-3"></a>

#### 8.3 Object.is() [§](#a8-3) [#](#top)
Object.is()用于比较两个值是否严格相等，ES5中只要使用==和===就可以比较，前者会自动转换数据类型，后者NaN不等于自身。+0 === -0
```js
Object.is('a', 'a'); // true
Object.is({}, {}); // false
// ES5
+0 === -0; // true
NaN === NaN; // false
// ES6
Object.is(+0, -0); // false
Object.is(NaN, NaN); // true
```
<a id="a8-4"></a>

#### 8.4 Object.assign() [§](#a8-4) [#](#top)
Object.assiign()方法用于对象的合并，将原对象得到所有可枚举属性赋值到目标对象
```js
let a = {a: 1};
let b = {b: 2};
Object.assign(a, b); // a => {a: 1, b: 2}
// 同名属性后者覆盖前者
let a = {a: 1, b: 2};
let b = {b: 3, c: 4};
Object.assign(a, b); // a => {a: 1, b: 3, c: 4}
// 若只有一个参数，返回该参数
Object.assign(a) === a; //true
typeof Object.assign(2); 'object'
// undefined//NaN 无法转成对象，作为参数会报错
Object.assign(undefined) // 报错
Object.assign(NaN) // 报错
// Object.assign() 浅拷贝
let a = {a: {b: 1}};
let b = Object.assign({}, a);
a.a.b = 2;
console.log(b.a.b); // 2
// 将数组作为对象处理，key为数组下标，value为数组下标对应的值
Object.assign([1, 2, 3], [4, 5]); // [4, 5, 3]
```
<a id="a9"></a>

### 9 Symbol [#](#top)
<a id="a9-1"></a>

#### 9.1 介绍  [§](#a9-1) [#](#top)
ES6引入Symbol作为一种新的原始数据类型，表示独一无二的值，防止属性名冲突
ES6 数据类型：Symbol、undefined、null、Boolean、String、NNumber、Object

```js
let a = Symbol();
let a1 = Symbol('abc');
let a2 = Symbol('abc');
a1 === a2; // false
// symbol不能与其他类型值计算
let a = Symbol('hello');
a += "world"; // 报错
`${a} woorld`; // 报错
a1.toString() === String(a1); //"abc"
// Symbol可以转换为布尔值，不能转为数值
Boolean(Symbol()); // true
!Symbol(); // false
Number(Symbol(1)); // TypeError
Symbol(1) + 1; // TypeError
```
<a id="a9-2"></a>

#### 9.2 Symbol作为属性名 [§](#a9-2) [#](#top)
```js
let a1 = symbol();
let b = {};
b[a1] = 'hello';
b = {
  [a1]: 'hello',
}
Object.defineProoperty(b, a1, {value: 'hello'})
b[a1] // 'hello'
```
<a id="a9-3"></a>

#### 9.3 应用：消除魔术字符串 [§](#a9-3) [#](#top)
**魔术字符串**：代码中多次出现，强耦合的字符串或数组，应该避免，使用含义清晰的变量替代
```js
function f(a){
  if (a == 'leo') {
    console.log('hello');
  }
};
f('leo'); // 'leo'为魔术字符串
// 常使用变量，消除魔术字符串
let obj = {name: 'leo'};
function f(a){
  if (a == obj.name) {
    console.log('hello')
  }
}
f(obj.name); // 'leo'为魔术字符串

// Symbol消除强耦合，使得不许关系具体值
let obj = {name: Symbol()};
function f(a){
  if (a == obj.name) {
    console.log('hello')
  }
}
f(obj.name); // 'leo'为魔术字符串

```
<a id="a9-4"></a>

#### 9.4 属性名遍历 [§](#a9-4) [#](#top)

Symbol 作为属性名遍历，不出现在for...in,for ... of循环，也不被object.keys(),object.getOwnPropertyNames(),JSON.stringify()返回。

```js
let a = Symbol('aa'), b = Symbol('bb');
let obj = {
  [a]: '11',
  [b]: '22'
}
for (let k of Object.values(obj)) {
  console.log(k);
}
// 无对应输出
let obj = {};
let aa = Symbol('leo');
Object.defineProtoType(obj, aa, {value: 'hi'});
for (let k in obj) {
  console.log(k);
}
// 无输出
Object.getOwnPropertyNames(obj); //[]
Object.getOwnPropertySymbols(obj); //[Symbol(leo)]
```

Object.getOwnPropertySymbols方法返回一个数组，包含当前对象所有用做属性名的Symbol值。

```js
let a = {}
let a1 = Symbol('a');
let a2 = Symbol('b');
a[a1] = 'hi';
a[a2] = 'oi';
let obj = Object.getOwnPropertySymbols(a);
obj; // [Symbol(a), Symbol(b)]
```

另外可以使用Refiect.ownKeys方法返回所有类型的键名，包括常规键名和Symbol键名

```js
let a = {
    [Symbol('leo')]: 1,
    aa: 2,
    bb: 3,
}
Reflect.ownKeys(a)l // ['aa', 'bb', Symbol('leo')]
```



由于Symbol值作为名称的属性不被常规方法遍历获取，因此常用于定义对象的一些非私有，且内部使用的方法。

<a id="a9-5"></a>

#### 9.5 Symbol.for()、Symbol.keyFor() [§](#a9-5) [#](#top)

* Symbol.for()

    **用于重复使用一个Symbol值**，接收一个**字符串**作为参数，若存在用此参数作为名称的Symbol值，返回这个Symbol，否则新建并返回以这个参数为名称的Symbol值。

  ```js
  let a = Symbol.for('aaa');
  let b = Symbol.for('aaa');
  
  a === b; // true
  Symbol.for('aa') === Symbol.for('aa'); // true
  Symbol('aa') === Symbol('aa'); // false
  ```

* Symbol.keyFor()

    **用于返回一个已使用的Symbol类型的key:**

  ```js
  let a = Symbol.for('aa');
  Symbol.keyFor(a); // 'aa'
  let b = Symbol('aa');
  Symbol.keyFor(b); // undefined
  ```

  

<a id="a9-6"></a>

#### 9.6 内置的Symbol值 [§](#a9-6) [#](#top)

- Symbol.for()
  **用于重复使用一个Symbol值**，接收一个**字符串**作为参数，若存在用此参数作为名称的Symbol值，返回这个Symbol，否则新建并返回以这个参数为名称的Symbol值。

```
let a = Symbol.for('aaa');let b = Symbol.for('aaa');
a === b;  // true
```

`Symbol()` 和 `Symbol.for()`区别：

```
Symbol.for('aa') === Symbol.for('aa'); // trueSymbol('aa') === Symbol('aa');         // false
```

- Symbol.keyFor()
  **用于返回一个已使用的Symbol类型的key**:

```
let a = Symbol.for('aa');Symbol.keyFor(a);   //  'aa'
let b = Symbol('aa');Symbol.keyFor(b);   //  undefined
```

### 9.6 内置的Symbol值

ES6提供11个内置的Symbol值，指向语言内部使用的方法：

- **1.Symbol.hasInstance**
  当其他对象使用 `instanceof`运算符，判断是否为该对象的实例时，会调用这个方法。比如， `fooinstanceofFoo`在语言内部，实际调用的是 `Foo[Symbol.hasInstance](foo)`。

```js
class P {    
    [Symbol.hasInstance](a){
        return a instanceof Array;
    }
}
[1, 2, 3] instanceof new P(); // true
```

P是一个类，new P()会返回一个实例，该实例的 `Symbol.hasInstance`方法，会在进行 `instanceof`运算时自动调用，判断左侧的运算子是否为 `Array`的实例。

- **2.Symbol.isConcatSpreadable**
  值为布尔值，表示该对象用于 `Array.prototype.concat()`时，是否可以展开。

```js
let a = ['aa','bb'];['cc','dd'].concat(a, 'ee'); // ['cc', 'dd', 'aa', 'bb', 'ee']a[Symbol.isConcatSpreadable]; // undefined
let b = ['aa','bb']; b[Symbol.isConcatSpreadable] = false; ['cc','dd'].concat(b, 'ee'); // ['cc', 'dd',[ 'aa', 'bb'], 'ee']
```

- **3.Symbol.species**
  指向一个构造函数，在创建衍生对象时会使用，使用时需要用 `get`取值器。

```js
class P extends Array {
    static get [Symbol.species](){
        return this;
    }
}
```

解决下面问题：

```JS
// 问题：  b应该是 Array 的实例，实际上是 P 的实例class P extends Array{}
let a = new P(1,2,3);
let b = a.map(x => x);
b instanceof Array; // trueb instanceof P; // true
// 解决：  通过使用 Symbol.species
class P extends Array {
    static get [Symbol.species]() {
        return Array; 
    }
}
let a = new P();
let b = a.map(x => x);
b instanceof P;     // falseb instanceof Array; // true
```

- **4.Symbol.match**
  当执行 `str.match(myObject)`，传入的属性存在时会调用，并返回该方法的返回值。

```js
class P {
    [Symbol.match](string){
        return 'hello world'.indexOf(string);
    }
}
'h'.match(new P());   // 0
```

- **5.Symbol.replace** 当该对象被 `String.prototype.replace`方法调用时，会返回该方法的返回值。

```js
let a = {};
a[Symbol.replace] = (...s) => console.log(s);
'Hello'.replace(a , 'World') // ["Hello", "World"]
```

- **6.Symbol.hasInstance**
  当该对象被 `String.prototype.search`方法调用时，会返回该方法的返回值。

```js
class P {
    constructor(val) {
        this.val = val;
    }
    [Symbol.search](s){
        return s.indexOf(this.val);
    }
}
'hileo'.search(new P('leo')); // 2
```

- **7.Symbol.split**
  当该对象被 `String.prototype.split`方法调用时，会返回该方法的返回值。

```js
// 重新定义了字符串对象的split方法的行为
class P {
    constructor(val) {
        this.val = val;
    }
    [Symbol.split](s) {
        let i = s.indexOf(this.val);
        if(i == -1) return s;
        return [
            s.substr(0, i),
            s.substr(i + this.val.length)
        ]
    }
}
console.log('helloworld'.split(new P('hello'))); // ["", "world"] 
console.log('helloworld'.split(new P('world'))); // ["hello", ""]
console.log('helloworld'.split(new P('leo')));   // "helloworld"
```

- **8.Symbol.iterator**  ????
  对象进行 `for...of`循环时，会调用 `Symbol.iterator`方法，返回该对象的默认遍历器。

```js
class P {
    *[Symbol.interator]() {
        let i = 0;
        while(this[i] !== undefined ) {
            yield this[i];
            ++i;
        }
    }
}
let a = new P();
a[0] = 1;
a[1] = 2;
for (let k of a){
    console.log(k);
}
```

- **9.Symbol.toPrimitive**
  该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。调用时，需要接收一个字符串参数，表示当前运算模式，运算模式有：

- - Number : 此时需要转换成数值
  - String : 此时需要转换成字符串
  - Default : 此时可以转换成数值或字符串

```js
let obj = {
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'number':
                return 123;
            case 'string':
                return 'str';
            case 'default':
                return 'default';
            default:
                throw new Error();
        }
    }
};
2 * obj // 2463 + obj // '3default'obj == 'default' // trueString(obj) // 'str'
```

- **10.Symbol.toStringTag**
  在该对象上面调用 `Object.prototype.toString`方法时，如果这个属性存在，它的返回值会出现在 `toString`方法返回的字符串之中，表示对象的类型。也就是说，这个属性可以用来定制 `[objectObject`]或 `[objectArray]`中 `object`后面的那个字符串。

```js
// 例一({[Symbol.toStringTag]: 'Foo'}.toString())// "[object Foo]"
// 例二class Collection {  get [Symbol.toStringTag]() {    return 'xxx';  }}let x = new Collection();Object.prototype.toString.call(x) // "[object xxx]"
```

- **11.Symbol.unscopables**
  该对象指定了使用with关键字时，哪些属性会被with环境排除。

```js
// 没有 unscopables 时
class MyClass {
    foo() {
        return 1; 
    }
}
var foo = function () { return 2; };
with (MyClass.prototype) {  foo(); // 1}
// 有 unscopables 时
class MyClass {
    foo() {
        return 1;
    }
    get [Symbol.unscopables]() {
        return { foo: true };
    }
}
var foo = function () {
    return 2; 
};
with (MyClass.prototype) {
    foo(); // 2
}
```

上面代码通过指定 `Symbol.unscopables`属性，使得 `with`语法块不会在当前作用域寻找 `foo`属性，即 `foo`将指向外层作用域的变量。

<a id="a10"></a>

### 10 Set和Map数据结构 [#](#top)
<a id="a11"></a>

#### 10.1 Set [§](#a10-1) [#](#top)
<a id="a10-1">

#### 10.2 Set的应用 [§](#a10-2) [#](#top)
<a id="a10-2">

#### 10.3 Map [§](#a10-3) [#](#top)
<a id="a10-3">

#### 10.4 Map与其他数据结构互相转换 [§](#a10-4) [#](#top)
<a id="a10-4">

### 11 Proxy [#](#top)
<a id="a12"></a>

#### 11.1 基础使用 [§](#a11-1) [#](#top)
<a id="a11-1">

#### 11.2 取消Proxy实例 [§](#a11-2) [#](#top)
<a id="a11-2">

#### 11.3 实现 Web服务的客户端 [§](#a11-3) [#](#top)
<a id="a11-3">
<a id="a12"></a>

### 12 Promise对象 [#](#top)

#### 12.1 概念 [§](#a12-1) [#](#top)
<a id="a12-2">

#### 12.2 基本使用 [§](#a12-2) [#](#top)
<a id="a12-3">

#### 12.3 Promise.prototype.then() [§](#a12-3) [#](#top)
<a id="a12-4">

#### 12.4 Promise.prototype.catch() [§](#a12-4) [#](#top)
<a id="a12-5">

#### 12.5 Promise.prototype.finally() [§](#a12-5) [#](#top)
<a id="a12-6">

#### 12.6 Promise.all() [§](#a12-6) [#](#top)
<a id="a12-7">

#### 12.7 Promise.race() [§](#a12-7) [#](#top)
<a id="a12-8">

#### 12.8 Promise.resolve() [§](#a12-8) [#](#top)

<a id="a13"></a>

### 13 Iterator和 for...of循环 [#](#top)
<a id="a13-1"></a>

#### 13.1 Iterator遍历器概念 [§](#a13-1) [#](#top)
<a id="a13-2"></a>

#### 13.2 Iterator遍历过程 [§](#a13-2) [#](#top)
<a id="a13-3"></a>

#### 13.3 默认Iterator接口 [§](#a13-3) [#](#top)
<a id="a13-4"></a>

#### 13.4 Iterator使用场景 [§](#a13-4) [#](#top)
<a id="a13-5"></a>

#### 13.5 for...of循环 [§](#a13-5) [#](#top)
<a id="a13-6"></a>

#### 13.6 跳出for...of [§](#a13-6) [#](#top)

<a id="a14"></a>

### 14 Generator函数和应用 [#](#top)
<a id="a13-1"></a>

#### 13.1 基本概念 [§](#a12-8) [#](#top)
<a id="a13-2"></a>

#### 13.2 yield表达式 [§](#a12-8) [#](#top)
<a id="a13-3"></a>

#### 13.3 next方法 [§](#a12-8) [#](#top)
<a id="a13-4"></a>

#### 13.4 for...of循环 [§](#a12-8) [#](#top)
<a id="a13-5"></a>

#### 13.5 Generator.prototype.throw() [§](#a12-8) [#](#top)
<a id="a13-6"></a>

#### 13.6 Generator.prototype.return() [§](#a12-8) [#](#top)
<a id="a13-6"></a>

#### 13.7 next()/throw()/return()共同点 [§](#a12-8) [#](#top)<a id="a13-6"></a>

#### 13.7 next()/throw()/return()共同点 [§](#a12-8) [#](#top)<a id="a13-6"></a>

#### 13.7 next()/throw()/return()共同点 [§](#a12-8) [#](#top)
基本概念
yield表达式
next方法
for...of循环
Generator.prototype.throw()
Generator.prototype.return()
next()/throw()/return()共同点
yield* 表达式
应用场景
<a id="a15"></a>

### 15 Class语法和继承 [#](#top)
基本概念
介绍
constructor()方法
类的实例对象
Class表达式
私有方法和私有属性
this指向问题
Class的getter和setter
Class的generator方法
Class的静态方法
Class的静态属性和实例属性
Class的继承
<a id="a16"></a>
介绍
严格模式
export命令
import命令
模块的整体加载
export default 命令
export 和 import 复合写法
浏览器中的加载规则

### 16 Module语法和加载实现 [#](#top)
