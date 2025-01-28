const words = ['apple', 'banana', 'orange', 'pineapple', 'grape'];

const filteredWords = words.filter(function (word) {
  return word.includes('apple');
});

console.log("Words containing 'apple':", filteredWords);