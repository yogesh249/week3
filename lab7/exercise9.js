const numbers = [10, 20, 5, 30, 15];

let maxNumber = numbers[0];

numbers.forEach(function (num) {
  if (num > maxNumber) {
    maxNumber = num;
  }
});

console.log("Maximum number:", maxNumber);