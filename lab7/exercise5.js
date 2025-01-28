const strings = ["program", "world", "javascript"];

strings.forEach(function (str, index, arr) {
  arr[index] = str.split('').reverse().join('');
});

console.log(strings);