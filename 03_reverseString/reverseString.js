const reverseString = function (word) {
  numOfChar = word.length;
  let sum = "";
  for (let i = numOfChar - 1; i >= 0; i--) {
    sum += word[i];
  }
  return sum;
};
console.log(reverseString("hello"));
// Do not edit below this line
module.exports = reverseString;
