## 基础类型

#### 布尔值

```ts
let isDone: boolean = false;
```

#### 数字

```ts
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
```

#### 字符串

```ts
let name: string = "sam";
name = "smith";
let age: number = 27;
let sentence: string = `hello, #{ name}.
next year $ { age + 1 } years old`;
```

#### 数组

```ts
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
```

#### 元组Tuple

元组类型运行一个已知元素数量和类型的数组，类型不必相同

```ts
let x: [string, number];
x = ['hello', 101];
x = [10, 'hello']; // Error
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
x[3] = 'world';
console.log(x[5].toString()); // OK, 'string' 'number'都有toString属性
x[6] = true; // Error
```

#### 枚举

```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
// 默认从0开始排序 也可手动控制成员数组
enum Color {Red = 1, Green, Blue} // 1, 2, 3
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log(colorName); // 'Green'
```

#### Any

```ts
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;
noptSure.ifItExists(); // Okay
noptSure.toFixed(); // Okay
let prettySure Object = 4;
prettySure.toFixed(); // Error toFixed not exist on 'Object'
let list: any[] = [1, true, "free"];
list[1] = 100;
```

#### Void

当函数没返回值时，返回类型```Void``` 变量赋值仅能赋值```undefined```/```null```

```ts
function warnUser(): void {
    console.log("This is a warning message");
}
let unusable: void = undefined;
```

#### Null Undefined

TypeScript, ```undefined```和```null```两者都有各种类型```undefined```和```null```，和```void```相似，本身类型用处不大

```ts
let u: undefined = undefined;
let n: null = null;
```

null undefined是所有类型子类型，null,undefined可赋值给number类型变量。
指定```--strictBullChecks```标记，```null```,```undefined```只能赋值给```void```和各自，在某处传入```string```,```null```,```undefined```时联合类型```string``` | ```null``` | ```undefined```

#### Never

```never```类型表示那些永不存在的值的类型，```never```类型时那些总会抛出异常或根本不会有返回值的函数返回类型；变量也可能时never类型，当它们被永不为真的类型保护约束时。

`never`类型是任何类型的子类型，也可以赋值给任何类型；然而，*没有*类型是`never`的子类型或可以赋值给`never`类型（除了`never`本身之外）。 即使 `any`也不可以赋值给`never`。

```ts
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

#### Object

```object```表示非原始类型，除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型

使用`object`类型·，可以更好表示想`Object.create`这样的API

```ts
declare function create(o: object | null): void;
create({ prop: 0}); // OK
create(nukk); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

#### 类型断言

类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设已经进行了必须的检查。

```ts
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// 等价于
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

