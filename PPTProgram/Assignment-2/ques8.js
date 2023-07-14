function minimumScore(nums, k) {
    let minScore = Infinity;
  
    for (let x = -k; x <= k; x++) {
      let minNum = Infinity;
      let maxNum = -Infinity;
  
      for (let i = 0; i < nums.length; i++) {
        let modifiedNum = nums[i] + x;
        minNum = Math.min(minNum, modifiedNum);
        maxNum = Math.max(maxNum, modifiedNum);
      }
  
      let score = maxNum - minNum;
      minScore = Math.min(minScore, score);
    }
  
    return minScore;
  }
  
  // Example usage
  let nums = [1, 3, 7];
  let k = 3;
  console.log(minimumScore(nums, k)); // Output: 2
  