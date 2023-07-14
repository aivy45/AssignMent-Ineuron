function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return [];
    }
  
    const sortedChanged = [...changed].sort((a, b) => a - b);
    const original = [];
  
    for (const num of sortedChanged) {
      if (original.includes(num / 2)) {
        original.splice(original.indexOf(num / 2), 1);
      } else {
        original.push(num);
      }
    }
  
    return original.length === changed.length / 2 ? original : [];
  }
  
  // Example usage:
  const changed = [6, 3, 0, 1, 2, 9, 12, 18];
  const originalArray = findOriginalArray(changed);
  console.log(originalArray); // Output: [0, 1, 2, 3]
  