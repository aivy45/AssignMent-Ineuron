function findLHS(nums) {
    const numCounts = new Map();
    let maxLen = 0;
  
    // Count the occurrences of each number
    for (let num of nums) {
      numCounts.set(num, (numCounts.get(num) || 0) + 1);
    }
  
    // Check each number for harmonious subsequence
    for (let [num, count] of numCounts) {
      if (numCounts.has(num + 1)) {
        maxLen = Math.max(maxLen, count + numCounts.get(num + 1));
      }
    }
  
    return maxLen;
  }
  
  // Example usage
//   let nums = [1, 3, 2, 2, 5, 2, 3, 7];
//   console.log(findLHS(nums)); // Output: 5
  