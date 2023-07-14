function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid; // Target found, return the index
      } else if (nums[mid] < target) {
        left = mid + 1; // Target is in the right half
      } else {
        right = mid - 1; // Target is in the left half
      }
    }
  
    return -1; // Target not found
  }