function distributeCandies(candyType) {
    const uniqueCandyTypes = new Set(candyType); // Create a Set to store unique candy types
    const maxEatCount = candyType.length / 2; // Maximum number of candies Alice can eat
    
    return Math.min(uniqueCandyTypes.size, maxEatCount);
  }
  
  // Example usage
//   let candyType = [1, 1, 2, 2, 3, 3];
//   console.log(distributeCandies(candyType)); // Output: 3
  