// Currying
// Implement Sum(1)(2)
function Sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(Sum(1)(2));

// Infinite Currying (Infinite Application)
function SumInfinite(a) {
  return function (b) {
    if (b) {
      return SumInfinite(a + b);
    } else {
      return a;
    }
  };
}

console.log(SumInfinite(1)(2)(3)(4)(5)());

// Practical example of currying:
const data = [
  {
    id: 1,
    title: "iPhone 9",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
  },
  {
    id: 2,
    title: "iPhone X",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
  },
  {
    id: 10,
    title: "HP Pavilion 15-DK1056WM",
    price: 1099,
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "laptops",
  },
  {
    id: 20,
    title: "Freckle Treatment Cream- 15gm",
    price: 70,
    discountPercentage: 16.99,
    rating: 4.06,
    stock: 140,
    brand: "Fair & Clear",
    category: "skincare",
  },
];

function sortByField(key) {
  return function (products) {
    return products.sort((a, b) => a[key] - b[key]);
  };
}

const sortByPrice = sortByField("price");
const sortByStock = sortByField("stock");

console.log("Price", sortByPrice(data));
console.log("Stock Price", sortByStock(data));

// Partial Application:

function multiply(a, b, c) {
  return a * b * c;
}

// Implementing Partial Application:

function partialMultiply(a, b) {
  return function (c) {
    return a * b * c;
  };
}

const triple = partialMultiply(2, 2);
console.log(triple(2));
const fourTimes = partialMultiply(2, 2);
console.log(fourTimes(4));
