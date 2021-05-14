/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  var results = [[1]];
  if (numRows === 1) {
      return results;
  }
  for (var row = 2; row <= numRows; row++) {
      prevRow = results[row - 2];
      var currRow = [1];
      for (var i = 0; i < prevRow.length - 1; i++) {
          currRow.push(prevRow[i] + prevRow[i+1]);
      }
      currRow.push(1);
      results.push(currRow);
      prevRow = currRow;
  }
  return results;
};