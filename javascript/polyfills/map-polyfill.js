const arr = [1, 2, 3, 4, 5];

const twiceArr = arr.map((number, index) => number * 2);

// Output
console.log(twiceArr); // [ 2, 4, 6, 8, 10 ]

// Polyfill for MAP

Array.prototype.myMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i));
  }

  return result;
};

const thriceArray = arr.myMap((number, index) => number * 3);

console.log(thriceArray);
