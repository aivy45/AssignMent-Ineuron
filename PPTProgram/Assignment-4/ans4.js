function arrayPairSum(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let sum = 0;
  
    for (let i = 0; i < nums.length; i += 2) {
      sum += nums[i]; // Add the smaller element in each pair to the sum
    }
  
    return sum;
  }
  
  // Example usage:
  const nums = [1, 4, 3, 2, 7, 6];
  const maxSum = arrayPairSum(nums);
  console.log(maxSum); // Output: 9 (Pairs: (1, 2), (3, 4), (6, 7))
  