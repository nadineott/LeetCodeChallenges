//note: this approach was slightly optimized (continue statement in for loop on line 37)

var WordDistance = function(words) {
    this.words = words;
};

WordDistance.prototype.shortest = function(word1, word2) {
  //find indeces of all words
  var word1Indeces = [];
  var word2Indeces = [];
  for (var i = 0; i < this.words.length; i++){
    if (this.words[i] === word1){
      word1Indeces.push(i);
    } else if (this.words[i] === word2){
      word2Indeces.push(i);
    }
  }
  var difference = function(x,y){
    if (x > y){
      return x-y;
    } else {
      return y-x;
    }
  }
  var shortestDistance = Infinity;
  for (var j = 0; j < word1Indeces.length; j++){
      var lastDistance = Infinity;
    if (shortestDistance === 1){
      return 1;
    }
    for (var k = 0; k < word2Indeces.length; k++){
      var dif = difference(word1Indeces[j], word2Indeces[k]);
      lastDistance = dif;
      shortestDistance = Math.min(shortestDistance, dif);
      //if the difference is increasing, don't continue
      if (dif > lastDistance){
        continue;
      }
    }
  }
  return shortestDistance;
};
