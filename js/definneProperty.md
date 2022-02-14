| 属性名 | 默认值    |
| :---: | :------: |
| value  | undefined |
| get  | undefined |
| set  | undefined |
| writable  | false |
| enumerable(是否可遍历) | false |
| configurable(是否配置，以及可否删除) | false |



```js
// Object.defineProperty
let Person = {}
Person.name = 'a1'
Person['a1'] = 'name'
console.log(Person.name)
console.log(Person.a1)
// 默认值
// value
Object.defineProperty(Person, 'prop', {
    value: 'state',
    name: 'state',
    writable: true // default: false
})
Object.defineProperties(Person, {
    prop: {
      value: 'state',
      name: 'state',
      writable: true // default: false
    }, a: {
        value: 111,
        configurable: false,
        enumerable: true,
        writable: false
    }
})
Person.prop = 'prop'			
```

`Object.preventExtensions` :  禁止一个对象添加新属性并保留已有属性

`Object.seal` :  不能添加或删除属性，但可以修改

`Object.freeze`:  禁止对于对象本身及其任意直接属性的修改,引用对象可修改

​	