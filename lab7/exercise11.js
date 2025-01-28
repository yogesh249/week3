const sentence = "The quick brown fox jumps over the lazy dog";
const letterCounts = {};

const letters = sentence.split('');

letters.forEach(function (letter) {
  if (letter !== ' ') {
    letter = letter.toLowerCase();
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  }
});

console.log(letterCounts);