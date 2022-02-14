| 参数名|参数需求|参数描述|例子|
|---|---|---|---|
|url|可选/url字符串或url正则|拦截请求的地址|/mock|
|type|可选|拦截ajax类型|GET POST|
|template|可选，对象或字符串|生成数据的模板|{'data&#124;1-10':['mock']} '@EMAIL'|

```js
//类型1: 名字|规则: 内容
Mock.mock({'data|1-4': '哑巴'})

//生成1-4个哑巴字符串
{
    data: "哑巴哑巴哑巴"
    
}

//类型2: Mock自带模板
Mock.mock('@province')

//随机生成一个省份
"上海"
```

```js
// mock 封装XMLHttpRequest _XMLHttpRequest
/* global window, document, location, Event, setTimeout */
/*
    ## MockXMLHttpRequest

    期望的功能：
    1. 完整地覆盖原生 XHR 的行为
    2. 完整地模拟原生 XHR 的行为
    3. 在发起请求时，自动检测是否需要拦截
    4. 如果不必拦截，则执行原生 XHR 的行为
    5. 如果需要拦截，则执行虚拟 XHR 的行为
    6. 兼容 XMLHttpRequest 和 ActiveXObject
        new window.XMLHttpRequest()
        new window.ActiveXObject("Microsoft.XMLHTTP")

    关键方法的逻辑：
    * new   此时尚无法确定是否需要拦截，所以创建原生 XHR 对象是必须的。
    * open  此时可以取到 URL，可以决定是否进行拦截。
    * send  此时已经确定了请求方式。

    规范：
    http://xhr.spec.whatwg.org/
    http://www.w3.org/TR/XMLHttpRequest2/

    参考实现：
    https://github.com/philikon/MockHttpRequest/blob/master/lib/mock.js
    https://github.com/trek/FakeXMLHttpRequest/blob/master/fake_xml_http_request.js
    https://github.com/ilinsky/xmlhttprequest/blob/master/XMLHttpRequest.js
    https://github.com/firebug/firebug-lite/blob/master/content/lite/xhr.js
    https://github.com/thx/RAP/blob/master/lab/rap.plugin.xinglie.js

    **需不需要全面重写 XMLHttpRequest？**
        http://xhr.spec.whatwg.org/#interface-xmlhttprequest
        关键属性 readyState、status、statusText、response、responseText、responseXML 是 readonly，所以，试图通过修改这些状态，来模拟响应是不可行的。
        因此，唯一的办法是模拟整个 XMLHttpRequest，就像 jQuery 对事件模型的封装。

    // Event handlers
    onloadstart         loadstart
    onprogress          progress
    onabort             abort
    onerror             error
    onload              load
    ontimeout           timeout
    onloadend           loadend
    onreadystatechange  readystatechange
 */

var Util = require('../util')

// 备份原生 XMLHttpRequest
window._XMLHttpRequest = window.XMLHttpRequest
window._ActiveXObject = window.ActiveXObject

/*
```