function calculateExponent(base, exponent) {
    if (exponent === 0) {
      return 1;
    }
  
    let result = 1;
  
    if (exponent > 0) {
      for (let i = 1; i <= exponent; i++) {
        result *= base;
      }
    } else {
      for (let i = 1; i <= Math.abs(exponent); i++) {
        result /= base;
      }
    }
  
    return result;
  }
  