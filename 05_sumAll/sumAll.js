const sumAll = function (start, end) {
  if (
    start < 0 ||
    end < 0 ||
    start % 1 !== 0 ||
    end % 1 !== 0 ||
    typeof start !== "number" ||
    typeof end !== "number"
  ) {
    return "ERROR";
  }

  if (start > end) {
    biggerNum = start;
    lowerNum = end;
  } else if (end > start) {
    biggerNum = end;
    lowerNum = start;
  }
  let sum = 0;
  for (let i = lowerNum; i <= biggerNum; i++) {
    sum += i;
  }
  return sum;
};
console.log(sumAll(2.5, 4));

// Do not edit below this line
module.exports = sumAll;
