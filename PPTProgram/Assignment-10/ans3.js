function printAllSubsets(set, subset = '', index = 0) {
    if (index === set.length) {
      console.log(subset); // Base case: Print the generated subset
      return;
    }
  
    // Include the current element
    printAllSubsets(set, subset + set[index], index + 1);
  
    // Exclude the current element
    printAllSubsets(set, subset, index + 1);
  }
  