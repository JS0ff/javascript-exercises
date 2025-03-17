const convertToCelsius = function (temp) {
  let celsius = ((temp - 32) * 5) / 9;
  if (!Number.isInteger(celsius)) {
    celsius = Number(celsius.toFixed(1));
  }
  return celsius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
