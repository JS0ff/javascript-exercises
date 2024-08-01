const repeatString = function (string, num) {
  let sum = "";
  if (num < 0) {
    return "ERROR";
  }
  for (let i = 0; i < num; i++) {
    sum += string;
  }
  return sum;
};

// Do not edit below this line
module.exports = repeatString;
