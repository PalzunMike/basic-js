module.exports = function countCats(matrix) {
  let catsArr = [];
  for ( let i=0; i < matrix.length; i++) {
    for (let j=0; j < matrix[i].legth; j++){
      if (matrix[i][j] == '^^'){
        catsArr.push(j);
      }
    }
  }
  return catsArr.length;
};
