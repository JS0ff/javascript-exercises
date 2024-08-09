const convertToCelsius = function (tempInF) {
  let tempInC = ((tempInF - 32) * 5) / 9;
  return Number(tempInC.toFixed(1));
};

const convertToFahrenheit = function (tempInC) {
  let tempInF = (tempInC * 5) / 9 + 32;
  return tempInF;
};

console.log(typeof convertToCelsius(100));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
