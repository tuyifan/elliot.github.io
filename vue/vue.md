## vue工作机制
##### 初始化

![vue 生命周期](./img/lifecycle.png)

---

#### 挂载函数
##### 1. beforeCreate
  执行在组件创建，数据观测(data observer)和event/watcher 事件配置之前，实例初始化之后被调用

  组件为创建，不能访问数据，组件中的data,ref均为undefined
##### 2. created
  在组件创建完后立即被调用，实例已完成以下配置:数据观测(data observer)，属性和方法的运算，watch/event事件回调
  未渲染成html模板，组件中的data对象已经存在，可以对data进行操作，ref依旧是undefined，挂载阶段还没开始，$el属性尚不可用
  一般数据初始化和初始化页面的请求都可以放在这一阶段，结束loading
##### 3. beforeMount
  该阶段在组件挂载之前，页面还没渲染出HTML元素，data初始化完成，ref依旧不可操作，相关render函数首次被调用，可以访问数据，编译模板结束，虚拟dom已经存在。
##### 4. mounted
  页面完成挂载之后执行，el被新创建的vm.$el替换了，可以操作ref，一般会把组件初始化时请求数据的方法放在这，filter也在这生效。
  如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内。
  可以拿到数据和节点，实例被挂载后调用。
  `this.$refs.ref`
##### 5. beforeUpdate
  数据更新时调用，在virtual DOM patch之前，在有特殊需求的情况下，可以将更新前数据存下来，后续使用。
  适合在更新前访问现有的DOM,如手动移除已添加的事件监听器。
##### 6. updated
  数据更新导致virtual DOm重新渲染，patch，在这之后调用该钩子，在数据更新之后做一些处理，监控数据的变化。
  此时，组件DOM已经更新，可以执行依赖于DOM的操作，若有相应状态改变，最好采用computed watcher取代
>  mounted updated 不表示子组件的状态也与父组件一直，若要等整个视图渲染/重绘结束，可调用vm.#nextTick;
##### 7. BeforeDestroy
该函数在实例销毁之前调用，ref依旧可以此操作，实例任然完全可用，在这里可以做清除定时器等操作防止内存泄漏
该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁
##### 8.destroyed
该函数在组件销毁的时候执行，即实例销毁后调用，这里的 ref 不存在。
##### 9. activated
被keep-alive缓存的组件激活时调用
##### 9. deactivated
被keep-alive缓存的组件停用时调用
> 服务器端渲染期间会调用：beforeCreate cteated
> 服务器端渲染期间不调用：beforeMount mounted beforeUpdate updated beforeDestroy destroyed activated deactivated
---
在new vue()之后，vue会调用进行初始化、初始化生命周期、事件、props、methonds、data、computed、watch...。其中最重要的是通过object.defineProperty设置setter和getter，
用来实现响应式和依赖收集。
##### 挂载组件
初始化之后，调用$mount挂载组件，启动编译器compile()，对template进行扫描，parse、optimize、generate，这一阶段会产生渲染函数或更新函数，render function，生成虚拟节点树。改变的数据是虚拟dom上数值而不是真正的DOM操作
更新前，会通过diff()这一算法，通过新值和老值的比较，计算出最小的DOM更新。执行到patch()来打补丁，做界面更新。目的是用js计算的时间换DOM操作的时间。
render function除了编译渲染函数意外，还做了个依赖搜集。数据变化时，该去界面中更新哪个数据节点，通过观察者wathcer()来调用更新函数patch()

### 编译
编译模块分为三个阶段
1. parse使用正则解析template中vue的指令变量等，形成语法树AST
1. optimize标记一些静态节点，用作后面的性能优化，在diff的时候直接略过
1. generate把第一步生成的AST转换为渲染函数render function
    