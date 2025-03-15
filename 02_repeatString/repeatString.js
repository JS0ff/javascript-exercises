const repeatString = function (word, amount) {
  let finalWord = "";
  if (amount < 0) {
    finalWord = "ERROR";
  } else {
    for (let i = 0; i < amount; i++) {
      finalWord += word;
    }
  }
  return finalWord;
};

// Do not edit below this line
module.exports = repeatString;
