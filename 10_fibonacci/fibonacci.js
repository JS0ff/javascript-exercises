const fibonacci = function (number) {
  //Create an empty array
  const arr = [];

  // Transform into number
  number = Number(number);

  // 0's element of an fibonacci sequence is 0;
  if (number === 0) {
    return 0;
  } else if (number < 0) {
    // Return string if negative user number
    return "OOPS";
  }
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
