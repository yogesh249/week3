const celsiusTemperatures = [0, 10, 20, 30, 40];

celsiusTemperatures.forEach(function (celsius, index, arr) {
  arr[index] = (celsius * 9/5) + 32;
});

console.log(celsiusTemperatures);