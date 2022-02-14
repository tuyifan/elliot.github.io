### Blob基本用法
#### 创建
可以通过Blob的构造函数创建Blob对象：
`Blob(blobParts[, options])`
参数说明：
blobbParts: 数组类型，数组中每一项连接起来构成Blob对象数据，数组中每项元素可以是ArrayBuffer,ArratBufferView,Blob,DOMString,或类似对象的混合体。
options: 可选项，字典格式类型，可以指定如下两个属性
* **type：** 
默认值为""
代表将被放入Blob中的数组内容的MIME类型
* **endings：** 
默认值为"transparent"
用于指定包含行结束符\n的字符串如何被写入。
> `native`表示行结束符会被更改为适合宿主操作系统文件系统的换行符 
> `transparent`表示会保持blob中保存的结束符不变
```js
var data1 = "a"
var data2 = "b"
var data3 = "<div style='color:red;'>This is a blob</div>"
var data4 = { "name": "abc" }

var blob1 = new Blob([data1])
var blob2 = new Blob([data1, data2])
var blob3 = new Blob([data3])
var blob4 = new Blob([JSON.stringify(data4)])
var blob5 = new Blob([data4])
var blob6 = new Blob([data3, data4])

console.log(blob1);  //输出：Blob {size: 1, type: ""}
console.log(blob2);  //输出：Blob {size: 2, type: ""}
console.log(blob3);  //输出：Blob {size: 44, type: ""}
console.log(blob4);  //输出：Blob {size: 14, type: ""}
console.log(blob5);  //输出：Blob {size: 15, type: ""}
console.log(blob6);  //输出：Blob {size: 59, type: ""}
```

`size`代表`Blob`对象中包含数据的字节数，使用字符串和普通对象创建Blob时的不同，blob4使用通过JSON.stringfy把data4对象转换成json字符串，blob4直接用data4调用。
```js 
blob4: "{"name":"abc"}", // len: 14
blob5:"[object Object]" // len: 15
```

#### slice方法
`Blob.slice([start [, end [, contentType]]]}`
Blob对象有一个slice方法，返回一个新的Blob对象，包含了源Blob对象中制定范围内的数据。
start: 可选，表示第一个会被拷贝进新的Blob的字节的起始位置。如果传入的是负数，会从末尾反向计数。
end: 可选，表示最后一个会被拷贝进新的Blob得到最后一个字节，如果传入负数，会从末尾反向计数。
contentType：可选，给新的Blob赋予一个新的文档类型，将type设为呗传入的值，默认为空字符串。

```js
var data = "abcdef"
var blob1 = new Blob([data])
var blob2 = blob1.slice(0,3)    
console.log(blob1)  //输出：Blob {size: 6, type: ""}
console.log(blob2)  //输出：Blob {size: 3, type: ""}
```

#### Blob对象能够添加到表单中，作为上传数据使用
```js
const content = '<a id="a"><b id="b">hey!</b></a>'
const blob = new Blob([content], {type: 'text/html'})
formData.append('webmasterfile', blob)
```

### Blob使用场景
#### 分片上传
```js
// 分片上传基础使用
function uploadFile(file) {
  let chunkSize = 10 * 1024 * 1024 // 分片大小10M
  let totalSize = file.size
  let chunkCount = Math.cell(totalSize / chunkCount)
  let offset = 0  // 偏移量
  let reader = new FileReader()
  reader.onload = function(e) {
    let xhr = new XMLHttpRequest()
    xhr.open("POST", url)
    xhr.overrideMineType("application/octet-stream")

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 2000) {
        ++offset
        if(offset === chunkCount) {
          console.log("上传完成")
        } else if (offset === chunkCount - 1) {
          blob = file.slice(offset * chunkSize, totalSize)
          reader.readAsBinaryString(blob)
        } else {
          blob = file.slice(offset * chunkSize, (offset + 1) * chunkSize)
          reader.readAsBinaryString(blob)
        }
      } else {
        console.log('error')
      }
    } 
    if (xhr.sendAsBinary) {
      xhr.sendAsBinary(e.target.result)
    } else {
      xhr.send(e.target.result)
    }
  }
  let blob = file.slice(0, chunkSize)
  reader.readAsBinaryString(blob)
}
```

#### Blob URL
Blob URL是blob协议的URL
`blob:httpp://xxx`
Blob URL可以通过URL.createObjectURL(blob)创建，大部分场景下，可以如同使用Http协议的url一样使用Blob URL,可作为文件下载地址和图片资源地址
```js
// 下载文件地址
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <title>Blob Test</title.
  <script>  
    function createDownloadFile() {
      var content = "Blob Data";
      var blob = new Blob([content]);
      var link = document.getElementByTageName('a')[0];
      link.download = "file";
      link.href = URL.createObjectURL(blob);
    }
    window.onload = createDownloadFile;
  </script>
</head>

<body>
  <a>下载</a>
</body>

</html>

// 图片资源地址
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Blob Test</title>
  <script>
    function handleFile(e) {
      var file = e.files[0];
      var blob = URL.createObjectURL(file);
      var img = document.getElementByTagName("img")[0];
      img.src = blob;
      img.onload = function(e) {
        URL.revokeObjectURL(this.src); //释放createObjectURL创建得对象
      }
    }
  </script>
</head>

<body>
  <input type="flie" accept="image/*" onchange="handleFile(this)" />
  <br/>
  <img style="width:200px;height:200px;">
</body>

</html>
```

#### window.URL.revokeObjectURL()
在每次调用createObjectUrl()方法时，会船舰一个新的URL对象，不需要这些对象时，必须通过URL.revokeObjectURL()方法来是否，浏览器在文档退出时自动释放它们，但为了最佳性能和内存使用状况。
`window.URL.revokeObjectURL(objectURL)`
```js
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Blob Test</title>
  <script>
    function handleFile(e) {
      var file = e.files[0];
      var fileReader = new FileReader();
      var img = document.getElementByTagName("img")[0];
      fileReader.onload = function(e) {
        img.src = e.target.result;
      }
      fileReader.readAsDataURL(file);
    }
  </script>
</head>
 
<body> 
  <input type="file" accept="image/*" onchange="handleFile(this)" />
  </br>
  <img style="width:200px;height:200px;">
</body>
  
</html>
```

Web性能优化有一项措施：把小图片用base64编码直接嵌入到HTML文件中，实际就是利用了Data URL来获取图片数据。
1. Blob URL得长度一般比较短，Data URL直接存储图片base64编码后得数据很长。当显示大图片时，使用Blob URL更优。
2. Blob URL可以方便的使用XMLHttpRequest获取源数据.Data URL并不是所有浏览器都支持XMLHttpRequest获取源数据。
```js
// 便于使用XMLHttpRequest获取源数据
var blobUrl = URL.createObkectURL(new Blob(['Test'], {type: 'text/plain'}));
var xhr = new XMLHttpRequest();
//如果是指xhr.responseType = 'blob',将返回一个Blob对象，而不是文本；
//xhr.responseType = 'blob';
xhr.onload = function() {
  alert(xhr.responseText);
}
xhr.open('get', blobUrl);
xhr.send();
```
3. Blob URL只能在当前应用内部使用，把Blob URL复制到浏览器的地址栏中，是无法获取数据的。Data URL相比之下，就有很好的移植性，你可以在任意浏览器使用。

除了可以用作图片资源的网络地址，Blob URL也可以用作其他资源的网络地址，例如html文件、json文件等，为了保证浏览器能正确的解析Blob URL返回的文件类型，需要在创建Blob对象时指定相应的type：

```js
//创建HTML文件的Blob URL
var data = "<div style='color:red;'This is a blob</div>";
var blob = new Blob([data], {type: 'text/html'}); // 'application/json'
var blobUrl = URL.createObjectURL(blob);
```