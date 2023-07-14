function isIsomorphic(s, t) {
    if (s.length !== t.length) {
      return false; // Different lengths, not isomorphic
    }
  
    const charMap = {}; // Map characters from s to t
    const usedChars = new Set(); // Keep track of used characters in t
  
    for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      const charT = t[i];
  
      if (!charMap[charS]) {
        if (usedChars.has(charT)) {
          return false; // Character in t is already mapped, not isomorphic
        }
  
        charMap[charS] = charT; // Map charS to charT
        usedChars.add(charT);
      } else {
        if (charMap[charS] !== charT) {
          return false; // Mapping does not match, not isomorphic
        }
      }
    }
  
    return true; // Strings are isomorphic
  }
  
  // Example usage:
  const s = "egg";
  const t = "add";
  const isIsomorphic = isIsomorphic(s, t);
  console.log(isIsomorphic);
  