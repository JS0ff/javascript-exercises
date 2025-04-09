const fibonacci = function (number) {
  //Create an empty array
  const arr = [];

  // Transform into number
  number = Number(number);

  // 0's element of an fibonacci sequence is 0;
  if (number === 0) return 0;
  // Return string if negative user number
  else if (number < 0) return "OOPS";

  //Full array elements with fibonacci sequence
  arr.push(1, 1); //First two elements are 1,1

  for (let i = 2; i < number; i++) {
    arr.push(arr[i - 1] + arr[i - 1 - 1]);
  }
  // Return user value of fibonacci
  return arr[arr.length - 1]; // return last item
};

// Do not edit below this line
module.exports = fibonacci;
