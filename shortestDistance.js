// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

// Given word1 = “coding”, word2 = “practice”, return 3.
// Given word1 = "makes", word2 = "coding", return 1.

var shortestDistance = function(words, word1, word2) {
  var words1 = [];
  var words2 = [];
  for (var i = 0; i < words.length; i++){
    if (words[i] === word1){
      words1.push(i);
    } else if (words[i] === word2){
      words2.push(i);
    }
  }
  var smallestDifference = Infinity;
  for (var j = 0; j < words1.length; j++){
    for (var k = 0; k < words2.length; k++){
      if (words1[j] > words2[k]){
        smallestDifference = Math.min(smallestDifference, (words1[j]-words2[k]))
      } else {
        smallestDifference = Math.min(smallestDifference, (words2[k]-words1[j]))
      }
    }
  }
  return smallestDifference;
};
