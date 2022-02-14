toRefs

```js
const data = ref(props)
const data = toRefs(props)
const m = toRef(props, 'msg')
const book = reactive({
    author: 'Vue Team',
    year: '2020',
    title: 'Vue 3 Guide',
    description: 'You are reading this book right now ;)',
    price: 'free',
    count: 1
})
```

props传来转为响应式无效





vite scss

只需引入 sass 而不是 node-sass sass-loader

```json
cssPreprocessOptions: {
    scss: {
      additionalData: `@import "./src/assets/common/common.scss";`//引用公共样式，使用vite搭建项目只安装sass即可，不需要安装node-sass,sass-loader
    }
  }
```

