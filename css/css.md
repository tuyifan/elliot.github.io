单行隐藏显示

```scss
.single {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; // 文本溢出显示省略号
}
.multi {
  overflow: hidden;
  word-break: break-all;
}

```

hsla() 函数使用色相、饱和度、亮度、透明度来定义颜色。

HSLA 即色相、饱和度、亮度、透明度（英语：Hue, Saturation, Lightness, Alpha ）。

- **色相（H）**是色彩的基本属性，就是平常所说的颜色名称，如红色、黄色等。

- **饱和度（S）**是指色彩的纯度，越高色彩越纯，低则逐渐变灰，取 0-100% 的数值。

- **亮度（L）** 取 0-100%，增加亮度，颜色会向白色变化；减少亮度，颜色会向黑色变化。

- **透明度（A）** 取值 0~1 之间， 代表透明度。

  ```scss
  #p1 {background-color:hsl(120,100%,50%,0.3);} /* 绿色 */
  #p2 {background-color:hsl(120,100%,75%,0.3);} /* 浅绿  */
  #p3 {background-color:hsl(120,100%,25%,0.3);} /* 暗绿  */
  #p4 {background-color:hsl(120,60%,70%,0.3);} /* 柔和的绿色 */
  ```



background-clip: border-box|padding-box|content-box;



| 值          | 说明                                             |
| :---------- | :----------------------------------------------- |
| border-box  | 默认值。背景绘制在边框方框内（剪切成边框方框）。 |
| padding-box | 背景绘制在衬距方框内（剪切成衬距方框）。         |
| content-box | 背景绘制在内容方框内（剪切成内容方框）。         |