### 原型链继承

将父类的实例作为子类的原型，实例是子类的实例也是父类的实例，父类新增的原型方法/属性，子类都能够访问，并且原型链继承简单易于实现。缺点：

1. 原型对象的所有属性被所有实例共享;

2. 无法向父组件传参，无法实现多继承;

3. 要想为子类新增属性和方法，必须要在`new`语句之后执行，不能放到构造器中;

   ```js
   function Animal() {}
   Animal.prototype.name = 'cat';
   Animal.prototype.age = 1;
   Animal.prototype.say = function () { console.log('hello');};
   var cat = new Animal();
   cat.name // cat
   cat.age // 1
   cat.say() // hello
   console.log(cat instanceof Animal); //true
   console.log(cat instanceof Cat); //true
   ```

   

### 构造继承

使用父类的构造函数来增强子类实例，即复制父类的实例属性给子类，

构造继承可以向父类传递参数，可以实现多继承，通过call多个父类对象。但是构造继承只能继承父类的实例属性和方法，不能继承原型属性和方法，无法实现函数复用，每个子类都有父类实例函数的副本，影响性能

```js
function Animal(){
    this.species = 'animal'
};
Animal.prototype.game = 'play'
function Cat(name, age){
    Animal.call(this);
    this.name = name;
    this.age = age;
};
var cat = new Cat('dot', 2);
cat.name // dot
cat.age // 2
cat.species // animal
cat.game // undefined
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true
```



### 实例继承

为父类实例添加新特性，作为子类实例返回，实例继承的特点是不限制调用方法，不管是new 子类（）还是子类（）返回的对象具有相同的效果，缺点是实例是父类的实例，不是子类的实例，不支持多继承

### 拷贝继承

特点：支持多继承，缺点：效率较低，内存占用高（因为要拷贝父类的属性）无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）

### 组合继承

通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用

调用了两次父类构造函数，生成了两份实例

```js
function Animal() {
    this.species = "animal"
}
function Cat(name) {
    Animal.call(this)
    this.name = name
}
Cat.prototype = new Animal()
Cat.prototype.constructor = Cat // Cat.prototype.constructor -> Animal -> Cat
```



### 寄生组合继承

通过寄生方式，砍掉父类的实例属性，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点

```js
function Animal() {
    this.species = "animal"
}
function Cat(name) {
    Animal.call(this)
    this.name = name
}
(function(){
    var Super = function(){};
    Super.prototype = Animal.prototype;
    Cat.prototype = new Super();
})();
// Test Code
var cat = new Cat('dot');
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); //true
```

