function calculateStringLength(str) {
    if (str === '') {
      return 0; // Base case: Empty string has length 0
    }
  
    // Reduce the string length by removing the first character
    return 1 + calculateStringLength(str.slice(1));
  }
  