// You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.

// Write a function to compute all possible states of the string after one valid move.

// For example, given s = "++++", after one move, it may become one of the following states:

// [
//   "--++",
//   "+--+",
//   "++--"
// ]

var generatePossibleNextMoves = function(s) {
    var answer = [];
    var arr = s.split("");
    for (var i = 0; i < arr.length-1; i++){
      if (arr[i] === "+" & arr[i+1] === "+") {
        arr[i] = "-";
        arr[i+1] = "-";
        answer.push(arr.join(""));
        arr[i] = "+";
        arr[i+1] = "+";
      }
    }
    return answer;
};
