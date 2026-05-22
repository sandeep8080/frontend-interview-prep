# CURRYING, INFINITE CURRYING & PARTIAL APPLICATION

Its a technique in which **fn(a,b)** is converted to **fn(a)(b)**.

Basically Currying in JS is a technique to convert a function with Multiple arguments into sequential function each containing a single argument.

There are few design patterns involve in currying like:

1. Infinite Application (Infinite Currying)
2. Partial Application

## Why do we need currying?

- To avoid passing the same variable again & again
- To create higher order func to increase reusability & scalability.
- It is a checking method that checks if you have all the things before you proceed.
- It divides one function into multiple functions so that one handles one set of responsibility.

## Partial Application

- In this the we fix the number of arguments in the function and creating a new function with single/few argument.

```
function partialAdd(a, b) {
    return function(c) {
        return a + b + c;
    }
}
const partialSum = partialAdd(1, 2); // Returns a function
console.log(partialSum(3));  // Returns 6
```

## Asked interview questions:

- Implement the function sum(1)(2).
- Follow up question implement infinite currying function is sum(1)(2)(3)(4)(5)()

## Practice Question:

- Implement a sorterFunction(fieldToBeSort)(data);

### REFERENCE:

[Currying & Partial Application](https://borstch.com/blog/currying-and-partial-application-in-javascript)
