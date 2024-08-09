const convertToCelsius = function (tempInF) {
  let tempInC = ((tempInF - 32) * 5) / 9;
  return Number(tempInC.toFixed(1));
};

const convertToFahrenheit = function (tempInC) {
  let tempInF = (tempInC * 9) / 5 + 32;
  return Number(tempInF.toFixed(1));
};

console.log(convertToFahrenheit(73.2));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
