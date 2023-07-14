function countConsonants(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
  
      if (!vowels.includes(char) && char >= 'a' && char <= 'z') {
        count++;
      }
    }
  
    return count;
  }
  