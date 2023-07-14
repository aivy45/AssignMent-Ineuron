function sortedSquares(nums) {
    const squaredArray = nums.map(num => num * num); // Square each number
    squaredArray.sort((a, b) => a - b); // Sort the array in non-decreasing order
    return squaredArray;
  }
  
  // Example usage:
  const nums = [-4, -2, 0, 2, 4];
  const squaredSorted = sortedSquares(nums);
  console.log(squaredSorted); // Output: [0, 4, 4, 16, 16]
  