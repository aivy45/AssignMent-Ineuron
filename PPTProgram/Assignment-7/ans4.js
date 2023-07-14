function reverseWords(s) {
    // Split the sentence into words
    const words = s.split(' ');
  
    // Reverse each word
    const reversedWords = words.map(word => {
      // Convert the word into an array of characters, reverse it, and join it back together
      return word.split('').reverse().join('');
    });
  
    // Join the reversed words back together with the whitespace
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  // Example usage:
  const sentence = "Let's go to the park";
  const reversedSentence = reverseWords(sentence);
  console.log(reversedSentence);
  