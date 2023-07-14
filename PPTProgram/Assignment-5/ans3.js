function sortedSquares(nums) {
    const n = nums.length;
    const result = new Array(n);
    let left = 0;
    let right = n - 1;
    let index = n - 1;
  
    while (left <= right) {
      const leftSquare = nums[left] * nums[left];
      const rightSquare = nums[right] * nums[right];
  
      if (leftSquare > rightSquare) {
        result[index] = leftSquare;
        left++;
      } else {
        result[index] = rightSquare;
        right--;
      }
  
      index--;
    }
  
    return result;
  }
  
  // Example usage:
  const nums = [-4, -1, 0, 3, 5];
  const sortedSquaresArray = sortedSquares(nums);
  console.log(sortedSquaresArray); // Output: [0, 1, 9, 16, 25]
  