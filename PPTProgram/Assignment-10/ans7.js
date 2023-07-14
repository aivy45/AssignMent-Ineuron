function permute(str, prefix = '') {
    if (str.length === 0) {
      console.log(prefix); // Base case: Print the generated permutation
      return;
    }
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const rest = str.slice(0, i) + str.slice(i + 1);
      permute(rest, prefix + char);
    }
  }
  