function transposeMatrix(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const transposedMatrix = [];
  
    for (let i = 0; i < columns; i++) {
      transposedMatrix[i] = [];
      for (let j = 0; j < rows; j++) {
        transposedMatrix[i][j] = matrix[j][i];
      }
    }
  
    return transposedMatrix;
  }
  
  // Example usage:
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const transposed = transposeMatrix(matrix);
  console.log(transposed);
  // Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
  