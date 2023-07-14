function findErrorNums(nums) {
    const n = nums.length;
    const set = new Set();
    let duplicate = -1;
    let missing = -1;
  
    for (let num of nums) {
      if (set.has(num)) {
        duplicate = num;
      } else {
        set.add(num);
      }
    }
  
    for (let i = 1; i <= n; i++) {
      if (!set.has(i)) {
        missing = i;
        break;
      }
    }
  
    return [duplicate, missing];
  }
  
  // Example usage
  let nums = [1, 2, 2, 4];
  console.log(findErrorNums(nums));  // Output: [2, 3]
  