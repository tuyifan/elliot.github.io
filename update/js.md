**JavaScript引擎的流行项目的列表：**
* V8 — 开源，由 Google 开发，用 C ++ 编写
* Rhino — 由 Mozilla 基金会管理，开源，完全用 Java 开发
* SpiderMonkey — 是第一个支持 Netscape Navigator 的 JavaScript 引擎，目前正供Firefox 使用
* JavaScriptCore — 开源，以Nitro形式销售，由苹果为Safari开发
* KJS — KDE 的引擎，最初由 Harri Porten 为 KDE 项目中的 Konqueror 网页浏览器开发
* Chakra (JScript9) — Internet Explorer
* Chakra (JavaScript) — Microsoft Edge
* Nashorn, 作为 OpenJDK 的一部分，由 Oracle Java 语言和工具组编写
* JerryScript —  物联网的轻量级引擎


V8引擎由两个主要部件组成:

* emory Heap(内存堆) — 内存分配地址的地方
* Call Stack(调用堆栈) — 代码执行的地方

js单线程编译语言，只有一个调用堆，每一个进入调用栈的称为调用帧
```js
console.log('start')
var a1 = 'foo'
function foo1(){
	console.log('foo1:',a1)
	console.log('foo1')
	foo2()
	var a1 = "bar"
	// console.log('foo1')
}
function foo2(){
	var a1={'key':'123'}
	console.log('foo2:',a1)
	console.log('foo2')
	foo3()
	// console.log('foo2')
}
function foo3(){
	{
		var a1 = '123231'
	}
	console.log('foo3:',a1)
	console.log('foo3')
	foo4()
	// console.log('foo3')
	// throw Error('Error')
}
function foo4(){
	(function (){
		var a1 = 'hello world'
		console.log(a1)
	})()
	console.log('foo4:',a1)
	console.log('foo4')
	foo5()
	// console.log('foo4')
}
function foo5(){
	console.log('foo5:',a1)
	let a1 = 1;
	console.log('foo5')
	// console.log('foo5')
}
foo1()
console.log('end')


```
![result](./refStack.png)
调用堆栈中函数调用数量超过调用堆栈的实际大小后，浏览器会抛出错误
![error](./maxStack.png)
调用堆栈执行时，浏览器被阻塞，无法执行其余代码，处理调用堆栈过多时，会停止相当久时间，大多浏览器会报错是否终止web页面