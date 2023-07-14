function findDisjointElements(nums1, nums2) {
    const distinctNums1 = new Set(nums1);
    const distinctNums2 = new Set(nums2);
    const result = [[], []];
  
    for (const num of nums1) {
      if (!distinctNums2.has(num)) {
        result[0].push(num);
      }
    }
  
    for (const num of nums2) {
      if (!distinctNums1.has(num)) {
        result[1].push(num);
      }
    }
  
    return result;
  }
  
  // Example usage:
  const nums1 = [1, 2, 2, 3, 4, 5];
  const nums2 = [2, 3, 5, 7, 8];
  
  const disjointElements = findDisjointElements(nums1, nums2);
  console.log(disjointElements);
  // Output: [[1, 4], [7, 8]]
  