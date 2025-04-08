const add = function (a, b) {
  arr = [a, b];
  let sum = arr.reduce((sum, item) => (sum += item));
  return sum;
};

const subtract = function (a, b) {
  arr = [a, b];
  let result = arr.reduce((sum, item) => (sum -= item));
  return result;
};

const sum = function (arr) {
  let sum = arr.reduce((sum, item) => (sum += item), 0);
  return sum;
};

const multiply = function () {};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
