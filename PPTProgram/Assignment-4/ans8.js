function shuffleArray(nums, n) {
    const shuffled = [];
  
    for (let i = 0; i < n; i++) {
      shuffled.push(nums[i], nums[i + n]);
    }
  
    return shuffled;
  }
  
  // Example usage:
  const nums = [1, 2, 3, 4, 5, 6];
  const n = 3;
  const shuffledArray = shuffleArray(nums, n);
  console.log(shuffledArray);
  // Output: [1, 4, 2, 5, 3, 6]
  