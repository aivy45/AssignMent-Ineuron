function searchRange(nums, target) {
    const leftIndex = findLeftmost(nums, target);
    
    if (leftIndex === -1) {
      return [-1, -1];
    }
    
    const rightIndex = findRightmost(nums, target);
    
    return [leftIndex, rightIndex];
  }
  
  function findLeftmost(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let leftmost = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] >= target) {
        right = mid - 1;
        if (nums[mid] === target) {
          leftmost = mid;
        }
      } else {
        left = mid + 1;
      }
    }
  
    return leftmost;
  }
  
  function findRightmost(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let rightmost = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] <= target) {
        left = mid + 1;
        if (nums[mid] === target) {
          rightmost = mid;
        }
      } else {
        right = mid - 1;
      }
    }
  
    return rightmost;
  }
  