const palindromes = function (string) {
  // Create an array of string elements
  // all items are lowercase
  let arr = string.toLowerCase().split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "!") {
      arr.splice(i, 1);
    }
  }
  console.log(arr);

  let reverseArr = arr.map((item) => item).reverse();

  // Check if words are similar;
  if (arr.join("") === reverseArr.join("")) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
