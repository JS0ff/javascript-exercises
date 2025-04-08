const add = function (a, b) {
  arr = [a, b];
  return arr.reduce((sum, item) => (sum += item));
};

const subtract = function (a, b) {
  arr = [a, b];
  return arr.reduce((sum, item) => (sum -= item));
};

const sum = function (arr) {
  return arr.reduce((sum, item) => (sum += item), 0);
};

const multiply = function (arr) {
  return (result = arr.reduce((product, item) => (product *= item)));
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    arr.push(i);
  }
  return arr.reduce((result, item) => result * item, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
