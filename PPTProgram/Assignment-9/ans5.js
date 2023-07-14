function findMaxElement(arr) {
    if (arr.length === 1) {
      return arr[0]; // Base case: array has only one element
    } else {
      const subArrayMax = findMaxElement(arr.slice(1)); // Recursive call with a smaller subarray
      return Math.max(arr[0], subArrayMax); // Compare the first element with the maximum of the subarray
    }
  }
  