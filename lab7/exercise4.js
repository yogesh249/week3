const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num, index, arr) {
  arr[index] = num + 10;
});

console.log(numbers);