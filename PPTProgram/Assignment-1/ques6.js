function containsDuplicate(nums) {
    const set = new Set();
  
    for (let num of nums) {
      if (set.has(num)) {
        return true;
      }
      set.add(num);
    }
  
    return false;
  }
  
  // Example usage
  let nums = [1, 2, 3, 1];
  console.log(containsDuplicate(nums));  // Output: true
  
  nums = [1, 2, 3, 4];
  console.log(containsDuplicate(nums));  // Output: false
  
  