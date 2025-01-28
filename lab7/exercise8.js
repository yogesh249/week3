const words = ["apple", "banana", "cherry"];

words.forEach(function (word, index, arr) {
  arr[index] = word.charAt(0).toUpperCase() + word.slice(1);
});

console.log(words);