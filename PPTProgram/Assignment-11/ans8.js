function intersect(nums1, nums2) {
    const frequencyMap = new Map();
    const result = [];
  
    // Count frequencies of elements in nums1
    for (let num of nums1) {
      frequencyMap.set(num, frequencyMap.get(num) + 1 || 1);
    }
  
    // Find intersection while considering counts
    for (let num of nums2) {
      if (frequencyMap.has(num) && frequencyMap.get(num) > 0) {
        result.push(num);
        frequencyMap.set(num, frequencyMap.get(num) - 1);
      }
    }
  
    return result;
  }
  