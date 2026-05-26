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



## Exercises
   ---
  ### Exercise 1: Simple Singleton Counter ✔
  
  Goal: Understand the basic singleton pattern with static properties.

  Create a Counter class that:
  - Has a static getInstance() method
  - Has a count property (starts at 0)
  - Has increment() and decrement() methods
  - Prove that multiple calls to getInstance() return the same instance
  
  Expected output:
  counter1.increment();
  counter1.increment();
  console.log(counter1.count);  // 2
  
  const counter2 = Counter.getInstance();
  console.log(counter2.count);  // 2 (same instance!)
  console.log(counter1 === counter2);  // true

  ---
 ### Exercise 2: Closure-Based Database Connection ✔
  
  Goal: Understand closures and IIFE for hiding private state.

  Create a database connection singleton using closure (no class):
  - Use IIFE to create a closure
  - Inside, have a private variable connection (starts as null)
  - Expose getConnection() that creates the connection on first call, reuses it after
  - Expose getConnectionCount() that returns how many times the connection was created (should only ever be 1)

  Expected output:
  const db1 = DatabaseConnection.getConnection();
  const db2 = DatabaseConnection.getConnection();
  
  console.log(db1 === db2);  // true
  console.log(DatabaseConnection.getConnectionCount());  // 1 (created only once!)

  ---
 ### Exercise 3: Config Manager with Getter/Setter ✔
  
  Goal: Singleton that manages app configuration and prevents accidental overwrites.

  Create a ConfigManager class that:
  - Is a singleton (static getInstance())
  - Has a private config object: { apiUrl: '', timeout: 0, debug: false }
  - Has a getConfig() method (returns a copy, not the original)
  - Has a setConfig(key, value) method (only allows setting known keys: apiUrl, timeout, debug)
  - Has a reset() method (only callable if a special password is provided)

  Expected output:
  const config1 = ConfigManager.getInstance();
  config1.setConfig('apiUrl', 'https://api.example.com');
  config1.setConfig('timeout', 5000);
  
  const config2 = ConfigManager.getInstance();
  console.log(config2.getConfig().apiUrl);  // https://api.example.com
  
  config2.setConfig('unknownKey', 'value');  // Should warn or error
  config2.reset('wrongPassword');  // Should fail
  config2.reset('correctPassword');  // Should reset

  ---
 ### Exercise 4: Closure-Based Event Emitter
  
  Goal: Combine closures with arrays to manage private subscribers.

  Create an EventEmitter singleton using IIFE + closure:
  - Private array: subscribers (holds functions)
  - Method: on(eventName, callback) — register a listener
  - Method: emit(eventName, data) — call all listeners for that event
  - Method: off(eventName, callback) — unregister a listener
  - Method: listenerCount(eventName) — return how many listeners exist for an event

  Expected output:
  const emitter1 = EventEmitter.on('user-login', (user) => console.log(`${user} logged in`));
  const emitter2 = EventEmitter.on('user-login', (user) => console.log(`Welcome ${user}!`));
  
  EventEmitter.emit('user-login', 'Alice');
  // Outputs:
  // Alice logged in
  // Welcome Alice!
  
  console.log(EventEmitter.listenerCount('user-login'));  // 2
  
  EventEmitter.off('user-login', emitter1);  // Remove first listener
  console.log(EventEmitter.listenerCount('user-login'));  // 1
  
  ---
  ### Exercise 5: Lazy-Loaded Resource Singleton
  
  Goal: Singleton that defers expensive initialization until first use.

  Create a DatabasePool singleton that:
  - Has a static getInstance() method
  - On first getInstance() call, logs "[DB] Initializing connection pool..." (expensive operation)
  - On subsequent calls, returns cached instance (logs "[DB] Returning cached pool")
  - Has a query(sql) method that returns { success: true, rows: [...] }
  - Tracks how many queries have been executed (private counter)
  - Has a getStats() method that returns { isInitialized: bool, queriesRun: number }

  Expected output:
  console.log(DatabasePool.getStats());  // { isInitialized: false, queriesRun: 0 }
  
  const db1 = DatabasePool.getInstance();  // Logs: "[DB] Initializing connection pool..."
  
  const db2 = DatabasePool.getInstance();  // Logs: "[DB] Returning cached pool"
  
  db1.query("SELECT * FROM users");
  db2.query("SELECT * FROM products");
  
  console.log(DatabasePool.getStats());  // { isInitialized: true, queriesRun: 2 }

  ---
  ### Exercise 6: Comparing Both Patterns (Challenge)
  
  Goal: Build the same singleton two ways and understand the tradeoffs.

  Create a UserSession singleton twice:

  Version A: Using class + static properties
  class UserSessionClass { ... }

  Version B: Using IIFE + closure
  const UserSession = (() => { ... })();
  
  Both should:
  - Have login(username) and logout() methods
  - Have getUser() method (returns current user or null)
  - Have isLoggedIn() method
  - Track login count privately (return via getLoginCount())

  Then answer:
  1. Can someone accidentally do UserSessionClass.instance = null and break the singleton?
  2. Can someone do the same to the closure version?
  3. Which version's code is easier to read?
  4. Which version provides better encapsulation?

  ---
