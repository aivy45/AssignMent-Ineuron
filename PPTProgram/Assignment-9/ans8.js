function calculateProduct(arr) {
    let product = 1;
  
    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
  
    return product;
  }
  
  // Example usage
  const array = [2, 4, 6, 8];
  const product = calculateProduct(array);
  console.log(product); // Output: 384
  