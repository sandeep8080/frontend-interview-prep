# IIFE (Immediately Invoked Function Expression) 

function runs **once** at definition time, then **disappears**.

```js
const X = (() => {
  let secret = 0;
  return {
    getSecret: () => secret,
  };
})(); // ← () calls it immediately
```

## Mental Model

**What happens:**
1. Function executes **once** → creates `secret` in its scope
2. Returns an object → stored in `X`
3. The function is **gone** — no variable holds it, nobody can call it again
4. `X` is the **returned object**, NOT the function
5. `X.getSecret()` closes over the original `secret` — same variable every time

**Mental model:**
```
    IIFE runs once 
        │ 
        ├─ creates scope: { secret: 0 } 
        ├─ returns object: { getSecret: fn } 
        └─ function disappears X = { getSecret: fn } ← this is ALL that's left 
                │ closes over → same scope forever
```