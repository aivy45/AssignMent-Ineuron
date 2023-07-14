function convertTo2DArray(original, m, n) {
    const totalElements = m * n;
  
    if (original.length !== totalElements) {
      return [];
    }
  
    const result = [];
  
    for (let i = 0; i < m; i++) {
      const row = original.slice(i * n, (i + 1) * n);
      result.push(row);
    }
  
    return result;
  }
  
  // Example usage:
  const original = [1, 2, 3, 4, 5, 6];
  const m = 2;
  const n = 3;
  
  const result = convertTo2DArray(original, m, n);
  console.log(result);
  // Output: [[1, 2, 3], [4, 5, 6]]
  