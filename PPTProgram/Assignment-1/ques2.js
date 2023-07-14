function removeElement(nums, val) {
    let i = 0; // Pointer for the current position
  
    for (let j = 0; j < nums.length; j++) {
      // If the current element is not equal to the given value
      if (nums[j] !== val) {
        // Move the element to the current position
        nums[i] = nums[j];
        i++;
      }
    }
  
    return i; // Return the count of remaining elements
  }
  
  // Example usage
  let nums = [3, 2, 2, 3];
  let val = 3;
  let count = removeElement(nums, val);
  console.log(count); // Output: 2
  console.log(nums);  // Output: [2, 2]
  