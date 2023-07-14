function reverseStr(s, k) {
    const chars = s.split(''); // Convert the string into an array of characters
  
    for (let i = 0; i < chars.length; i += 2 * k) {
      let start = i; // Start index of the current chunk
      let end = Math.min(i + k - 1, chars.length - 1); // End index of the first k characters in the current chunk
  
      // Reverse the first k characters in the current chunk
      while (start < end) {
        const temp = chars[start];
        chars[start] = chars[end];
        chars[end] = temp;
        start++;
        end--;
      }
    }
  
    return chars.join(''); // Convert the array of characters back into a string
  }
  
  // Example usage:
  const s = "abcdefg";
  const k = 2;
  const reversedStr = reverseStr(s, k);
  console.log(reversedStr);
  