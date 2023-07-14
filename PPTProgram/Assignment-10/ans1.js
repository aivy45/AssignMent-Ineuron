function isPowerOfThree(n) {
    if (n <= 0) {
      return false; // Negative numbers and zero are not powers of three
    }
  
    while (n % 3 === 0) {
      n /= 3; // Divide by 3 until n is no longer divisible by 3
    }
  
    return n === 1; // Check if n eventually becomes 1
  }
  