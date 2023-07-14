function arrayPairSum(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let sum = 0;
  
    for (let i = 0; i < nums.length; i += 2) {
      sum += nums[i]; // Sum the values at even indices
    }
  
    return sum;
  }
  
  // Example usage
//   let nums = [1, 4, 3, 2];
//   console.log(arrayPairSum(nums)); // Output: 4
  