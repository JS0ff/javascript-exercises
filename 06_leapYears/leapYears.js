const leapYears = function (year) {
  // Finds out century leap year
  if (year % 100 === 0 && year % 400 === 0) {
    return true;
    // Finds out century but not leap year
  } else if (year % 100 === 0 && year % 400 != 0) {
    return false;
    // Finds out any calendar leap year
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
