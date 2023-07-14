function findCommonElements(arr1, arr2, arr3) {
    let result = [];
    let i = 0;
    let j = 0;
    let k = 0;
  
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
      if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
        result.push(arr1[i]);
        i++;
        j++;
        k++;
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else if (arr2[j] < arr3[k]) {
        j++;
      } else {
        k++;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const arr1 = [1, 4, 7, 9, 11];
  const arr2 = [3, 4, 7, 8, 11, 13];
  const arr3 = [2, 4, 6, 7, 11];
  
  const commonElements = findCommonElements(arr1, arr2, arr3);
  console.log(commonElements); // Output: [4, 7, 11]
  