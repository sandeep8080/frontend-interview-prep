const arr = [1, 2, 3, 4, 5, 6];

const filterBy2 = arr.filter((val, index) => val % 2 === 0);

console.log(filterBy2);

// Polyfill of filter

Array.prototype.myFilter = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
    if (cb(this[i], i)) {
      result.push(this[i]);
    }
  }
  return result;
};

const filterBy3 = arr.myFilter((val, idx) => val % 3 === 0);

console.log(filterBy3);
