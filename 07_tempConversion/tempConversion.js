const convertToCelsius = function (temp) {
  let celsius = ((temp - 32) * 5) / 9;
  if (!Number.isInteger(celsius)) {
    celsius = Number(celsius.toFixed(1));
  }
  return celsius;
};

const convertToFahrenheit = function (temp) {
  let fahrenheit = (temp * 9) / 5 + 32;
  if (!Number.isInteger(fahrenheit)) {
    fahrenheit = Number(fahrenheit.toFixed(1));
  }
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
