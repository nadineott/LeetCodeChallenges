// Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.
//Input: 2 Expect output: [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]

function rockPaperPermutation (roundCount) {
  var list = [];
  var options = ["r", "p", "s"];
  //edge case for input of 0
  if (roundCount === 0) {
    return list;
  }
  var recurse = function(string) {
    //base case
    if (roundCount === string.length) {
      list.push(string);
      return;
    } else {
      for (var i = 0; i < options.length; i++) {
        recurse(string+options[i]);
        }
      }
  }
  recurse("");
  return list;
};
