
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result_array = [];
  if(!matrix || matrix.length === 0 ){
    return [];
  }
  for(let i = 0; i < matrix.length; i++){
    if (matrix[i].length === 0 || !matrix[i]){
      return [];
    }
    else if(i % 2 === 0){
      for(let j = 0; j < matrix[i].length; j++){
        result_array.push(matrix[i][j]);
      }
    }
    else{
      for(let j = matrix[i].length - 1 ; j >= 0 ; j--){
        result_array.push(matrix[i][j]);
      }
    }
  }
 
  return result_array;
}
