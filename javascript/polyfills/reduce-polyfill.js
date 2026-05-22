const arrData = [1, 2, 3, 4, 5, 6];

const sum = arrData.reduce((prev, curr, idx) => prev + curr, 0);

console.log(sum);

// Reduce Polyfill

Array.prototype.myReduce = function (cb, initValue) {
  let result = initValue;
  for (let i = 0; i < this.length; i++) {
    result = cb(result, this[i], i);
  }
  return result;
};

const addBy3AtFirst = arrData.myReduce((prev, curr, idx) => prev + curr, 3);

console.log(addBy3AtFirst); // 24

// Write the polyfill for reduce with the below input & output:
// Input
const arr = [1, 2, 3, 4];
// Output
// {1:1,2:2,3:3}

// const resultOutput = arr.reduce((prev, curr, idx) => {
//   prev[curr] = curr;
//   return prev;
// }, {});

const resultOutput = arr.myReduce((prev, curr, idx) => {
  prev[curr] = curr;
  return prev;
}, {});

console.log(resultOutput);
