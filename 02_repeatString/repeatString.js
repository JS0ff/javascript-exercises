const repeatString = function (word, amount) {
  let finalWord = "";
  {
    for (let i = 0; i < amount; i++) {
      finalWord += word;
    }
  }
  return finalWord;
};

// Do not edit below this line
module.exports = repeatString;
