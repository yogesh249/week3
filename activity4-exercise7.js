const sentences = ["Hello World", "How are you?", "I am fine."];
const words = sentences.map(function(sentence) {
  return sentence.split(" ");
});
console.log(words);