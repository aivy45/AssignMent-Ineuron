function plusOne(digits) {
    const n = digits.length;
    
    for (let i = n - 1; i >= 0; i--) {
      if (digits[i] < 9) {
        digits[i]++;
        return digits;
      } else {
        digits[i] = 0;
      }
    }
    
    // If we reach this point, it means all digits were 9
    digits.unshift(1);
    return digits;
  }
  
  // Example usage
  let digits = [1, 2, 3];
  let result = plusOne(digits);
  console.log(result);  // Output: [1, 2, 4]
  