function isStrobogrammatic(num) {
    const strobogrammaticMap = {
      '0': '0',
      '1': '1',
      '6': '9',
      '8': '8',
      '9': '6',
    };
  
    let rotatedNum = '';
  
    for (let i = num.length - 1; i >= 0; i--) {
      const digit = num[i];
  
      if (!strobogrammaticMap.hasOwnProperty(digit)) {
        return false; // Invalid digit, not strobogrammatic
      }
  
      rotatedNum += strobogrammaticMap[digit];
    }
  
    return num === rotatedNum;
  }
  
  // Example usage:
  const num = "69";
  const isStrobogrammatic = isStrobogrammatic(num);
  console.log(isStrobogrammatic);
  