function lastRemaining(n) {
    if (n === 1) {
      return 1; // Base case: Only one number remaining
    }
  
    if (n % 2 === 0) {
      // If n is even, the result is the same as the result for n/2
      return 2 * (n / 2 + 1 - lastRemaining(n / 2));
    } else {
      // If n is odd, the result is the same as the result for n-1
      return 2 * (n - lastRemaining(n - 1));
    }
  }
  