const palindromes = function (string) {
  // Create an array of string elements
  // all items are lowercase

  let validChar = "abcdefghijklmnopqrstuvwxyz123456790";

  // Declare and check if the string has any punctuation
  let arr = string
    .toLowerCase()
    .split("")
    .filter((item) => validChar.includes(item));

  //Reverse main array
  let reverseArr = arr.map((item) => item).reverse();

  // Check if words are similar;
  return arr.join("") === reverseArr.join("") ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
