function backspaceCompare(s, t) {
    const processString = (str) => {
      const stack = [];
  
      for (const char of str) {
        if (char === '#') {
          stack.pop(); // Remove the last character from the stack
        } else {
          stack.push(char); // Push non-backspace characters to the stack
        }
      }
  
      return stack.join(''); // Convert the stack to a string
    };
  
    const processedS = processString(s);
    const processedT = processString(t);
  
    return processedS === processedT;
  }
  
  // Example usage:
  const s = "ab#c";
  const t = "ad#c";
  const result = backspaceCompare(s, t);
  console.log(result);
  