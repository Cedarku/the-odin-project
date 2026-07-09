function roundToOneDecimal(num) {
  return Math.round(num * 10) / 10;
}

const convertToCelsius = function(farenheit) {
  const celsius = (farenheit - 32) * 5 / 9;
  return roundToOneDecimal(celsius)
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = (celsius * 9 / 5) + 32;
  return roundToOneDecimal(fahrenheit)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

/*
- farenheit a celsius = (fahrenheit - 32) * 5 / 9. 
- celsius a farenheit = (celsius * 1,8) + 32
*/