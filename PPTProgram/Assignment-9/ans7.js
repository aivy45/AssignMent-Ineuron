function permuteString(str) {
    const result = [];
  
    // Convert the string to an array to make it mutable
    const chars = str.split('');
  
    // Recursive function to generate permutations
    function permuteHelper(chars, current = '') {
      if (chars.length === 0) {
        result.push(current); // Base case: permutation complete, add to the result
      } else {
        for (let i = 0; i < chars.length; i++) {
          const remainingChars = chars.filter((_, index) => index !== i); // Get the remaining characters
          permuteHelper(remainingChars, current + chars[i]); // Recursive call with the remaining characters and updated current string
        }
      }
    }
  
    permuteHelper(chars);
    return result;
  }
  
  // Example usage
  const string = 'abc';
  const permutations = permuteString(string);
  console.log(permutations);
  