# Prototypal Inheritance

Objects inherit from other objects via a hidden link (`[[Prototype]]`).

## Mental Model

```
Property lookup: JS walks UP the chain until found or null

instance           Constructor.prototype       Object.prototype
┌────────────┐     ┌────────────────────┐      ┌──────────────┐
│ name: "Rex"│──►  │ bark() {}          │──►   │ toString()   │──► null
│ (own prop) │     │ (shared methods)   │      │ hasOwnProp() │
└────────────┘     └────────────────────┘      └──────────────┘
  __proto__            __proto__                   __proto__
```

**One sentence:** When you access `obj.x`, JS checks the object first, then walks `__proto__` links until it finds `x` or hits `null`.

## Why Prototype Exists — Avoiding Duplication

```
WITHOUT prototype (wasteful):
┌─ d1 ─────────────┐  ┌─ d2 ─────────────┐  ┌─ d3 ─────────────┐
│ name: "Rex"       │  │ name: "Max"       │  │ name: "Bud"       │
│ bark: function(){}│  │ bark: function(){}│  │ bark: function(){}│
└───────────────────┘  └───────────────────┘  └───────────────────┘
         3 copies of the SAME function — wasted memory

WITH prototype (efficient):
┌─ d1 ──────┐  ┌─ d2 ──────┐  ┌─ d3 ──────┐
│ name:"Rex"│  │ name:"Max"│  │ name:"Bud"│
└─────┬─────┘  └─────┬─────┘  └─────┬─────┘
      │              │              │
      └──────────────┼──────────────┘
                     ▼
           Dog.prototype
           ┌─────────────┐
           │ bark() {}   │  ← ONE copy, shared by all
           └─────────────┘
```

- **Own properties** (`name`, `count`) — things that **differ** per instance, live on the instance itself
- **Prototype methods** (`bark`) — things that are **the same** for every instance, live on prototype (one copy)

## `prototype` vs `__proto__`

```
                  ┌─────────────────────────────────┐
                  │  Function (e.g. Dog)             │
                  │  .prototype ──→ { bark() }       │ ← blueprint for instances
                  └─────────────────────────────────┘
                                    ▲
                                    │  __proto__ (the link)
                  ┌─────────────────────────────────┐
                  │  Instance (e.g. d1)              │
                  │  name: "Rex"                     │
                  └─────────────────────────────────┘

  .prototype  → "Here's the bag of shared methods. Every instance I create will have access to these."
  .__proto__  → "Here's my pointer to that bag."

  instance.__proto__ === Constructor.prototype  // always true
```

They are **NOT the same thing**.

## Prerequisites
1. Objects & property access
2. `this` keyword
3. `new` keyword
4. Constructor functions

## Gotchas / Caveats
- **`__proto__` is deprecated** → use `Object.getPrototypeOf()` / `Object.setPrototypeOf()`
- **Property shadowing** → `instance.x = 5` creates own property, doesn't modify prototype's `x`
- **Mutating `__proto__` at runtime deoptimizes** the object in V8 → use `Object.create()` at creation time
- **`for...in` walks the chain** → use `hasOwnProperty()` to filter own props only
- **Arrow functions have no `.prototype`** → can't be used as constructors

## Ways to Set Up the Chain
```js
// 1. Object.create (cleanest)
const child = Object.create(parent);

// 2. Constructor + new
function Dog() {}
Dog.prototype.bark = () => {};
const d = new Dog();  // d.__proto__ === Dog.prototype

// 3. Class (sugar for #2)
class Dog { bark() {} }

// 4. Object.setPrototypeOf (avoid — slow)
Object.setPrototypeOf(child, parent);
```

## Practice Questions
1. Given `const a = {}`, what is `a.__proto__`? What is `a.__proto__.__proto__`?
2. Build a prototype chain: `Animal → Dog → myDog`. Make `myDog.speak()` return "Woof" via the chain.
3. Explain why `d1.bark === d2.bark` is `true` but `d1.name === d2.name` is `false`.
4. What does `for...in` return that `Object.keys()` doesn't? Why?
