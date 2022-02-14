# async
async是Generator函数的语法糖
```js
const fs = require('fs');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const gen = function* () {
  const f1 = yield readFile('/etc/fstab');
  const f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
//上面代码的函数gen可以写成async函数，就是下面这样。

const asyncReadFile = async function () {
  const f1 = await readFile('/etc/fstab');
  const f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
```

async函数内部return语句返回的值，会成为then方法回调函数的参数。
```js
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
  return 111; // Promise(resolve=>resolve(111))
}

asyncPrint('hello world', 50).then(v=>console.log(v));
// 50s-> hello world 111
```

<font color=#c7254e >await</font>后的promise对象 <font color=#c7254e >reject</font>状态后，async函数会中断执行。通过<font color=#c7254e >catch</font>[[进行捕获正常运行]]