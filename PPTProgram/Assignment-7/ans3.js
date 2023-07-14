function addStrings(num1, num2) {
    let sum = ''; // Stores the resulting sum
    let carry = 0; // Stores the carry value
  
    let i = num1.length - 1; // Index for num1
    let j = num2.length - 1; // Index for num2
  
    // Iterate from right to left
    while (i >= 0 || j >= 0 || carry > 0) {
      // Convert characters to integers, or use 0 if index is out of range
      const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
      const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
  
      // Add the digits along with the carry
      const digitSum = digit1 + digit2 + carry;
  
      // Update the carry and the sum
      carry = Math.floor(digitSum / 10);
      sum = (digitSum % 10) + sum;
  
      // Move to the next digits
      i--;
      j--;
    }
  
    return sum;
  }
  
  // Example usage:
  const num1 = "123";
  const num2 = "456";
  const sum = addStrings(num1, num2);
  console.log(sum);
  