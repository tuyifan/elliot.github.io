vue-cli 迁移至 vite vue3

defineConfig css.preprocessorOptions 可配置全局 scss less文件

process.env 被 import.meta.env 替代

```js
// 动态引入
const modulesFiles = require.context('./modules', true, /\.ts$/) // webpack
const modulesFiles = import.meta.globEager("./modules/*.ts") // vite
```

vue-router vuex useStore useRoute 可获取store router 对象 仅在setup中生效

ref 变更 const formRef = ref({}) :ref=“formRef”

在 Vue 3.x 中，“使用生产版本”提示仅在使用“dev + full build”(包含运行时编译器并有警告的构建) 时才会显示。