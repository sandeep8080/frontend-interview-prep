function Stack() {
  this.result = [];
  this.push = function (val) {
    this.result.push(val);
  };
  this.pop = function () {
    this.result.pop();
  };
  this.isEmpty = function () {
    return this.result.length === 0;
  };

  this.count = function () {
    return this.result.length;
  };
  this.peek = function (index) {
    return this.result[index];
  };
  this.show = function () {
    return this.result;
  };
}

const newStack = new Stack();
newStack.push(1);
console.log(newStack); // insert value in the stack
newStack.pop();
newStack.push(2);
newStack.push(3);
newStack.push(4);
console.log(newStack.show());
console.log(newStack.isEmpty());
console.log(newStack.count());
console.log(newStack.peek(2));
