function arrangeCoins(n) {
    let rows = 0;
    let coins = n;
  
    while (coins >= rows + 1) {
      rows++;
      coins -= rows;
    }
  
    return rows;
  }
  
  // Example usage:
  const n = 10;
  const completeRows = arrangeCoins(n);
  console.log(completeRows); // Output: 4
  