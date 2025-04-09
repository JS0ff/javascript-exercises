const fibonacci = function (number) {
  const arr = [];
  for (let i = 0; i < number; i++) {
    if (i === 0) {
      arr.push(1);
    } else if (i === 1) {
      arr.push(1);
    } else if (i > 1) {
      arr.push(arr[i - 1] + arr[i - 1 - 1]);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = fibonacci;
