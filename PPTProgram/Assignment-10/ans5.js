function countContiguousSubstrings(s) {
    let count = 0;
  
    for (let i = 0; i < s.length; i++) {
      const startChar = s[i];
      let j = i + 1;
  
      while (j < s.length) {
        const endChar = s[j];
  
        if (startChar === endChar) {
          count++;
        }
  
        j++;
      }
    }
  
    return count;
  }
  