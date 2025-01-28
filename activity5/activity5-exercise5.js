function isPalindrome(word) {
    return word === word.split('').reverse().join('');
  }
  
  const words = ['level', 'hello', 'radar', 'world', 'racecar'];
  
  const palindromes = words.filter(isPalindrome);
  console.log("Palindromes:", palindromes);