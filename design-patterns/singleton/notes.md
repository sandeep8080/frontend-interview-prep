# Singleton Design Pattern

One instance, global available. 

## Mental Model
- First call - create instance - store it
- Subsequent calls - return stored instance

## Implementation

### A. getInstance (cleanest)
```js
class Logger {
  static instance = null;
  static getInstance() {
    if (!Logger.instance) Logger.instance = new Logger();
    return Logger.instance;
  }
  log(msg) { console.log(msg); }
}
```

### B. Constructor Guard
```js
class Logger {
  constructor() {
    if (Logger.instance) return Logger.instance;
    Logger.instance = this;
  }
  log(msg) { console.log(msg); }
}
```
Creates & discards to GC a throwaway object each time after the first.

### C. Closure + IIFE (best encapsulation)
```js
const Logger = (() => {
  let instance = null;
  return {
    getInstance: () => {
      if (!instance) instance = { log: (msg) => console.log(msg) };
      return instance;
    }
  };
})();
```
`instance` is truly private — can't be broken from outside.

**Mental model:**
```
Request → Gatekeeper (getInstance)
              │
         Exists? ──Yes──→ return same object
              │
             No ──→ create, store, return
```

---


## Prerequisites
1. Classes & Static properties and methods [Reference](../../javascript/fundamentals/classes/notes.md)
2. `new` keyword & Prototype chain [Reference](../../javascript/fundamentals/new-keyword.md)
3. Closure
4. IIFE [Reference](../../javascript/fundamentals/iife/notes.md)

## Gotchas / Caveats



## Practice quesitions
1. Implement a Logger Singleton
2. Implement a Counter singleton
3. Implement a DatabaseConnection Singleton using IIFE & Closure
