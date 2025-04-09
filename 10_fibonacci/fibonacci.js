const fibonacci = function (number) {
  const arr = [];
  //Full array elements with fibonacci sequence
  for (let i = 0; i < number; i++) {
    if (i === 0) {
      arr.push(1);
    } else if (i === 1) {
      arr.push(1);
    } else if (i > 1) {
      arr.push(arr[i - 1] + arr[i - 1 - 1]);
    }
  }
  // Return user value of fibonacci
  return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
