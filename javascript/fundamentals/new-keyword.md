# `new` keyword

create instance of constructor function or class.

## Mental Model

```
new Constructor() 
        ├─ 1. {} (fresh object) 
        ├─ 2. __proto__ link (connect to prototype) 
        ├─ 3. run constructor (populate with this.x = ...) 
               └─ returns object? → discard fresh, use returned 
               └─ returns primitive / nothing? → use fresh

```

**Caveat:** If constructor returns an **object**, `new` discards its object and uses the returned one.

## Prerequisites
 1. `__proto__` & Prototype chain [Reference](./prototypal-inheritance/notes.md)
 2. Object creation in JS
 3. this keyword
 4. constructor functions & regular functions