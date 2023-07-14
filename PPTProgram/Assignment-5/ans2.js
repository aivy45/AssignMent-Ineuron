function arrangeCoins(n) {
    let left = 0;
    let right = n;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const curr = (mid * (mid + 1)) / 2;
  
      if (curr === n) {
        return mid; // Found exact number of coins to form complete rows
      } else if (curr < n) {
        left = mid + 1; // Search in the upper half
      } else {
        right = mid - 1; // Search in the lower half
      }
    }
  
    return right; // Number of complete rows
  }
  
  // Example usage:
  const n = 8;
  const completeRows = arrangeCoins(n);
  console.log(completeRows); // Output: 3
  