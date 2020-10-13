
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (Array.isArray(matrix)) {
      for (let i = 0; i < matrix.length; i++ ) {
          if (i % 2 === 1) {
              matrix[i].reverse();
          }
      }
      return matrix.flat(1);
  } else {
      return [];
  }
}
