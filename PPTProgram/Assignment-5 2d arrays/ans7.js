function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return nums[left];
  }
  
  // Example usage:
  const nums = [4, 5, 6, 7, 0, 1, 2];
  const minElement = findMin(nums);
  console.log(minElement); // Output: 0
  