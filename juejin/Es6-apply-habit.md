# 掘金学习第一天

## 一、代码中习惯使用更多 ES6 编写

### 1. 对象取值 （解构赋值）

```js
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};
let { a, b, c, d, e } = obj;
const f = a + b;
```

> ES6 的解构赋值虽然好用。但是要注意解构的对象不能为 undefined、null。否则会报错，故要给被解构的对象一个默认值。

```js
// So
const { a, b, c, d, e } = obj || {};
```

### 2. 合并数组或对象

```js
// 数组
const a = [1, 2, 3, 4];
const b = [1, 4, 5, 6];
const c = [...new Set([...a, ...b])];
// [1,2,3,4,5,6]

// 对象
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { ...obj1, ...obj3 };
// {a:1, b:2}
```

### 3. 拼接字符串
