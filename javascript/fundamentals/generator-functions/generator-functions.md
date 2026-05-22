# Generator Function

![Generator Function Explanation](image.png)

- Syntax

```js
function* abc() {
  yield 1;
  yield 2;
  yield 3;
}

const test = abc();
console.log(test.next().value); // 1
console.log(test.next().value); // 2
console.log(test.next().value); // 3
```

- Generator Function return a generator object. This object is conform both **Iterable & Iterator protocols**. Basically to generator function is a way to creator your own iterators.

- Generator (Iterator object) has a next() method & return a object with { value:'', done: true}.

[Reference for more info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
