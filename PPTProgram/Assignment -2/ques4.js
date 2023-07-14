function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    let i = 0;
  
    while (i < flowerbed.length) {
      if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
        flowerbed[i] = 1; // Plant a flower in the current plot
        count++; // Increment the count of planted flowers
  
        if (count >= n) {
          return true; // We have planted enough flowers, return true
        }
      }
  
      i++;
    }
  
    return false; // Cannot plant enough flowers, return false
  }
  
  // Example usage
//   let flowerbed = [1, 0, 0, 0, 1];
//   let n = 1;
//   console.log(canPlaceFlowers(flowerbed, n)); // Output: true
  