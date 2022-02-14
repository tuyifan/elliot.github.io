### 设计原则---
#### 单一职责原则（SRP）
一个对象或方法只做一件事情。如果一个方法承担了过多的职责，那么在需求的变迁过程中，需要改写这个方法的可能性就越大。
应该把对象或方法划分成较小的粒度
#### 最少知识原则（LKP）
一个软件实体应当 尽可能少地与其他实体发生相互作用 
应当尽量减少对象之间的交互。如果两个对象之间不必彼此直接通信，那么这两个对象就不要发生直接的 相互联系，可以转交给第三方进行处理
#### 开放-封闭原则（OCP）
软件实体（类、模块、函数）等应该是可以 扩展的，但是不可修改
当需要改变一个程序的功能或者给这个程序增加新功能的时候，可以使用增加代码的方式，尽量避免改动程序的源代码，防止影响原系统的稳定

##### [一、单例模式](#s1)
##### [二、策略模式](#s2)
##### [三、代理模式](#s3)
##### [四、迭代器模式](#s4)
##### [五、发布-订阅模式](#s5)
##### [六、命令模式](#s6)
##### [七、组合模式](#s7)
##### [八、模块方法模式](#s8)
##### [九、享元模式](#s9)
##### [十、职责链模式](#s10)
##### [十一、中介者模式](#s11)
##### [十二、装饰者模式](#s12)
##### [十三、状态模式](#s13)
##### [十四、适配器模式](#s14)
##### [十五、外观模式](#s15)


<a id='s1'></a>

#### 一、单例模式
##### 1. 定义
保证一个类只有一个实例，并提供一个访问它的全局访问点
##### 2. 核心
确保只有一个实例，并提供全局访问
##### 3. 用途
一个全局使用的类频繁地创建与销毁
##### 4. 实现
```js
// 闭包缓存变量实现
function SetManager(name){
  this.manager = name
}
SetManager.prototype.getName = function () {
  console.log(this.manager);
};
var SingletonSetManager = (function () {
  var manager = null;
  return function (name) {
    if (!manager) {
      manager = new SetManager(name)
    }
    return manager;
  }
})();

SingletonSetManager('a').getName(); // a
SingletonSetManager('b').getName(); // a
SingletonSetManager('c').getName(); // a

// 抽取通用单例
function getSingleton (fn) {
  var instance = null;
  return function () {
    if (!instance) {
      instance = fn.apply(this, arguments);
    }
    return instance;
  }
}
var managerSingleton = getSingleton( function(name) {
  var manager = new SetManager(name);
  return manager;
});
managerSingleton('a').getName(); // a
managerSingleton('b').getName(); // a

function SetHr(name){
  this.hr = name;
}
SetHr.prototype.getName = function(){
  console.log(this.hr)
};
var hrSingleton = getSingleton(function(name){
  var hr = new SetHr(name);
  return hr;
})
hrSingleton('aa').getName(); // aa
hrSingleton('bb').getName(); // aa
```


<a id='s2'></a>

#### 二、策略模式
##### 1. 定义
定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换
##### 2. 核心
将算法的使用和算法的实现分离开来。
一个基于策略模式的程序至少由两部分组成：
第一个部分是一组策略类，策略类封装了具体的算法，并负责具体的计算过程。
第二个部分是环境类Context，Context接受客户的请求，随后把请求委托给某一个策略类。要做到这点，说明Context 中要维持对某个策略对象的引用
##### 3. 用途
一个系统有许多许多类，而区分它们的只是他们直接的行为
##### 4. 实现
```js
// 加权映射
var levelMap = {
  S: 10,
  A: 8,
  B: 6,
  C: 4
}
var scoreLevel = {
  basicScore: 80,
  S: function(){
    return this.basicScore + levelMap['S'];
  },
  A: function(){
    return this.basicScore + levelMap['A'];
  },
  B: function(){
    return this.basicScore + levelMap['B'];
  },
  C: function(){
    return this.basicScore + levelMap['C'];
  },
}
function getScore(level) {
  return scoreLevel[level] ? scoreLevel[level]() : 0;
}
console.log(
    getScore('S'),
    getScore('A'),
    getScore('B'),
    getScore('C'),
    getScore('D')
); // 90 88 86 84 0

// 表单验证
// 错误提示
var errorMsgs = {
    default: '输入数据格式不正确',
    minLength: '输入数据长度不足',
    isNumber: '请输入数字',
    required: '内容不为空'
};

// 规则集
var rules = {
    minLength: function(value, length, errorMsg) {
        if (value.length < length) {
            return errorMsg || errorMsgs['minLength']
        }
    },
    isNumber: function(value, errorMsg) {
        if (!/\d+/.test(value)) {
            return errorMsg || errorMsgs['isNumber'];
        }
    },
    required: function(value, errorMsg) {
        if (value === '') {
            return errorMsg || errorMsgs['required'];
        }
    }
};

// 校验器
function Validator() {
    this.items = [];
};

Validator.prototype = {
    constructor: Validator,
    
    // 添加校验规则
    add: function(value, rule, errorMsg) {
        var arg = [value];

        if (rule.indexOf('minLength') !== -1) {
            var temp = rule.split(':');
            arg.push(temp[1]);
            rule = temp[0];
        }

        arg.push(errorMsg);

        this.items.push(function() {
            // 进行校验
            return rules[rule].apply(this, arg);
        });
    },
    
    // 开始校验
    start: function() {
        for (var i = 0; i < this.items.length; ++i) {
            var ret = this.items[i]();
            
            if (ret) {
                console.log(ret);
                // return ret;
            }
        }
    }
};

// 测试数据
function testTel(val) {
    return val;
}

var validate = new Validator();

validate.add(testTel('ccc'), 'isNumber', '只能为数字'); // 只能为数字
validate.add(testTel(''), 'required'); // 内容不为空
validate.add(testTel('123'), 'minLength:5', '最少5位'); // 最少5位
validate.add(testTel('12345'), 'minLength:5', '最少5位');

var ret = validate.start();

console.log(ret);
```
<a id='s3'></a>

#### 三、代理模式
##### 1. 定义
##### 2. 核心
##### 3. 用途
想在访问一个类时做一些控制
##### 4. 实现
<a id='s4'></a>

#### 四、迭代器模式
##### 1. 定义
##### 2. 核心
##### 3. 用途
遍历一个聚合对象。
##### 4. 实现
<a id='s5'></a>

#### 五、发布-订阅模式
##### 1. 定义
##### 2. 核心
##### 3. 用途

##### 4. 实现
<a id='s6'></a>

#### 六、命令模式
##### 1. 定义
##### 2. 核心
##### 3. 用途
在某些场合，比如要对行为进行"记录、撤销/重做、事务"等处理，这种无法抵御变化的紧耦合是不合适的。在这种情况下，如何将"行为请求者"与"行为实现者"解耦？将一组行为抽象为对象，可以实现二者之间的松耦合。
##### 4. 实现
<a id='s7'></a>

#### 七、组合模式
##### 1. 定义
##### 2. 核心
##### 3. 用途
1. 您想表示对象的部分-整体层次结构（树形结构)
2. 您希望用户忽略组合对象与单个对象的不同，用户将统一地使用组合结构中的所有对象。
##### 4. 实现
<a id='s8'></a>

#### 八、模块方法模式
##### 1. 定义
##### 2. 核心
##### 3. 用途
一些方法通用，却在每一个子类都重新写了这一方法
##### 4. 实现
<a id='s9'></a>

#### 九、享元模式
##### 1. 定义
##### 2. 核心
##### 3. 用途
 1. 系统中有大量对象。
 2. 这些对象消耗大量内存。
 3. 这些对象的状态大部分可以外部化。
 4. 这些对象可以按照内蕴状态分为很多组，当把外蕴对象从对象中剔除出来时，每一组对象都可以用一个对象来代替。
 5. 系统不依赖于这些对象身份，这些对象是不可分辨的。
##### 4. 实现
<a id='s10'></a>

#### 十、职责链模式
##### 1. 定义
##### 2. 核心
##### 3. 用途
在处理消息的时候以过滤很多道
##### 4. 实现
<a id='s11'></a>

#### 十一、中介者模式
##### 1. 定义
##### 2. 核心
##### 3. 用途
多个类相互耦合，形成了网状结构。
##### 4. 实现
<a id='s12'></a>

#### 十二、装饰者模式
##### 1. 定义
##### 2. 核心
##### 3. 用途
在不想增加很多子类的情况下扩展类
##### 4. 实现
<a id='s13'></a>

#### 十三、状态模式
##### 1. 定义
##### 2. 核心
##### 3. 用途
代码中包含大量与对象状态有关的条件语句
##### 4. 实现
<a id='s14'></a>

#### 十四、适配器模式
##### 1. 定义
##### 2. 核心
##### 3. 用途
 1. 系统需要使用现有的类，而此类的接口不符合系统的需要。
 2. 想要建立一个可以重复使用的类，用于与一些彼此之间没有太大关联的一些类，包括一些可能在将来引进的类一起工作，这些源类不一定有一致的接口。
 3. 通过接口转换，将一个类插入另一个类系中。（比如老虎和飞禽，现在多了一个飞虎，在不增加实体的需求下，增加一个适配器，在里面包容一个虎对象，实现飞的接口。）
##### 4. 实现
<a id='s15'></a>

#### 十五、外观模式
##### 1. 定义
##### 2. 核心
##### 3. 用途
 1. 客户端不需要知道系统内部的复杂联系，整个系统只需提供一个"接待员"即可。 
 2. 定义系统的入口。
##### 4. 实现