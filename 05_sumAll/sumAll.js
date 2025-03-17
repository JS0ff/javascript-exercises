const sumAll = function (start, end) {
  let sum = 0;
  if (!(start % 1 === 0) || !(end % 1 === 0)) {
    return "ERROR";
  } else if (typeof start != "number" || typeof end != "number") {
    return "ERROR";
  } else if (start < 0 || end < 0) {
    return "ERROR";
  } else if (start > end) {
    let biggerValue = start;
    start = end;
    end = biggerValue;
  }
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
