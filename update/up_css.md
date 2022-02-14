### CSS transition animation  
transition由:hover延伸出来，无论是动态设置还是非动态设置的过渡效果，只要过渡效果指定属性发生变化就会触发过渡效果。  
animation是从flash延伸出来，使用关键帧的概念，非动态设置的，则页面加载完后会触发动画效果，如果是动态设置，则设置完后，会触发动画效果，后续改变属性值也不会触发动画效果，除display:none状态改变，此时也会触发动画效果。  
animation占用资源相对比transition多，如果能用transition实现，用transition实现。复杂且自由的动画可以使用animation。  

### animation
animation: animationName time;
```css
{
animation: animationName time;
-moz-animation: animationName time;	/* Firefox */
-webkit-animation: animationName time;	/* Safari 和 Chrome */
-o-animation: animationName time;	/* Opera */
}
@keyframes animationName {
  0% {css}   // from
  25% {css}
  50% {css}
  75% {css}
  100% {css}  // to
}
@-moz-keyframes animationName {
  0% {css}
  25% {css}
  50% {css}
  75% {css}
  100% {css}
}
@-webkit-keyframes animationName {
  0% {css}
  25% {css}
  50% {css}
  75% {css}
  100% {css}
}
@-o-keyframes animationName {
  0% {css}
  25% {css}
  50% {css}
  75% {css}
  100% {css}
}
```
|属性|描述|可选值|默认值|
| ---- | ---- |----| ---- |
|@keyframes|规定动画|-|-|
|animation|所有动画属性的简写属性，除了animation-play-state属性-||-|
|animation-name|@keyframes动画的名称|-|-|
|animation-duration|动画完成一个周期所花费的秒或毫秒|s/ms|0|
|animation-timing-function|动画的速度曲线|linear,ease,ease-in,ease-out,ease-in-out,cubic-bezier(x1,y1,x2,y2)|'ease'|
|animation-delay|动画何时开始|s,ms|0|
|animation-iteration-count|动画被播放的次数|count/infinite|1|
|animation-direction|动画是否在下一周期逆向地播放|normal,alternate|'normal'|
|animation-play-state|动画是否正在运行或暂停|paused,running|'running'|
|animation-fill-mode|对象动画时间之外的状态|none,forwards,backwards,both|-|

[css动画常用属性](https://www.runoob.com/cssref/css-animatable.html)

transition:
* transition-property css属性名称
* transition-duration 完成过渡效果所需时间
* transition-timing-function 速度曲线
* transition-delay 过渡效果何时开始






### 点击页面出现文字效果
```css
body:active::after {
    transform: translate(-50%, -100%);
    opacity: 0.5;
    transition: 0s;
    left: -999px;
}
body::after {
    content: 'content';
    position:fixed;
    z-index: 999;
    left: calc(var(--clientx, -999) * 1px);
    top: calc(var(--clienty, -999) * 1px);
    transform: translate(-50%, calc(-100% - 20px));
    opacity: 0;
    transition: transform .3s, opacity .5s;
}
```