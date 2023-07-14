function moveZeroes(nums) {
    let j = 0; // Pointer for the next non-zero element
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        // Swap the non-zero element with the element at index j
        [nums[i], nums[j]] = [nums[j], nums[i]];
        j++;
      }
    }
  }
  
  // Example usage
  let nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  console.log(nums);  // Output: [1, 3, 12, 0, 0]
  
  