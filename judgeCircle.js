/**
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
  var start = [0, 0];
  for (var move of moves) {
      if (move === 'R') {
          start[0]++;
      }
      if (move === 'L') {
          start[0]--;
      }
      if (move === 'U') {
          start[1]++;
      }
      if (move === 'D') {
          start[1]--;
      }
  }
  if (start[0] === 0 && start[1] === 0) {
      return true;
  } else {
      return false;
  }
};