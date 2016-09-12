// Given two strings s and t which consist of only lowercase letters.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Find the letter that was added in t.

var findTheDifference = function(s, t) {
  var sArr = s.split("");
  var tArr = t.split("");
  for (var i = 0; i < tArr.length; i++){
    var current = tArr[i];
    var target = sArr.indexOf(current);
    if (target === -1){
      return current;
    } else {
      sArr.splice(target, 1);
    }
  }
  return "fail";
};
