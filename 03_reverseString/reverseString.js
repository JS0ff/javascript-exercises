const reverseString = function (word) {
  let finalWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    finalWord += word[i];
  }
  return finalWord;
};

// Do not edit below this line
module.exports = reverseString;
