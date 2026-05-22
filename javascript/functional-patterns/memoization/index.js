function memoized(fn) {
  const cache = {};
  return (...args) => {
    console.log(cache);
    const key = args.join("");
    if (cache[key]) {
      return cache[key];
    } else {
      cache[key] = fn(...args);
      return cache[key];
    }
  };
}

// Function to be Memoized
function add(a, b) {
  return a + b;
}

const memoizedAddFunc = memoized(add);
console.log(memoizedAddFunc(1, 2));
console.log(memoizedAddFunc(1, 2));
console.log(memoizedAddFunc(2, 2));

// Reference: https://lembdadev.com/posts/memoization-in-javascript
