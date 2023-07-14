function findDisjoint(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
  
    const result = [[], []];
  
    for (const num of nums1) {
      if (!set2.has(num)) {
        result[0].push(num);
      }
    }
  
    for (const num of nums2) {
      if (!set1.has(num)) {
        result[1].push(num);
      }
    }
  
    return result;
  }
  
  // Example usage:
  const nums1 = [1, 2, 2, 3, 4, 5];
  const nums2 = [2, 4, 6, 8];
  
  const disjointLists = findDisjoint(nums1, nums2);
  console.log(disjointLists);
  // Output: [[1, 3, 5], [6, 8]]
  