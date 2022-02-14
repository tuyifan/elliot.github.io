## Promise
<font color=#c7254e>promise</font>对象有两个特点
1. Promise对象代表一个异步操作，有三种状态：<font color=#c7254e>pedding</font>(进行中)，<font color=#c7254e>fulfilledd</font>(已成功)，<font color=#c7254e>rejected</font>(已失败)
1. 状态改变后无法再变，任何时候都可以得到这个结果。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。

## 基础用法
```js
const promise = new Promise((resolve, reject) => {
    console.log('Promise')
    resolve('resolved')
})
promise.then(value => {
    console.log(value)
},error => {
    console.log(error)
});
console.log('hi)
// Promise
// h1
// resolved
```
Promise 对ajax封装
```js
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});
```

异步操作的结果是返回另一个异步操作的 resolve reject执行后
```js
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {resolve(p1);console.log('hi')}, 1000)
})

p2
  .then(result => console.log(result))
  .catch(error => console.log(error))
//hi
//Error: fail
```
catch
```js
p.then((val) => console.log('fulfilled:', val))
  .catch((err) => console.log('rejected', err));

// 等同于
p.then((val) => console.log('fulfilled:', val))
  .then(null, (err) => console.log("rejected:", err));
```

then 嵌套循环调用
```js
getJSON("/post/1.json").then(
  post => getJSON(post.commentURL)
).then(
  comments => console.log("resolved: ", comments),
  err => console.log("rejected: ", err)
);
```
promise.resolve()
```js
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))
const f = () => console.log('now');
Promise.resolve().then(f);
console.log('next');
// next
// now

(async () => f())();
console.log('next');
// now
// next

(
  () => new Promise(
    resolve => resolve(f())
  )
)();
console.log('next');
// now
// next

Promise.try(f);
console.log('next');
// now
// next
```