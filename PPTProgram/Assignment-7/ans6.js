function canShift(s, goal) {
    // Check if goal is a substring of s concatenated with itself
    const concatenated = s + s;
    return concatenated.includes(goal);
  }
  
  // Example usage:
  const s = "abcde";
  const goal = "cdeab";
  const result = canShift(s, goal);
  console.log(result);
  