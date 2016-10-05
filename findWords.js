var touchPoints = function([x,y]){
  var answer = [];
  var options = [x-1, y-1, x-1, y, x-1, y+1, x, y+1, x+1, y+1, x+1, y, x+1, y-1, x, y-1];
  for (var i = 0; i < options.length-1; i = i+2){
    if (options[i] > -1 && options[i+1] > -1){
      answer.push([options[i], options[i+1]]);
    }
  }
  return answer;
}

var findAllOccurances = function(letter, board){
  var options = [];
  for (var i = 0; i < board.length; i++){
    for (var j = 0; j < board[i].length; j++){
      if (letter === board[i][j]){
        options.push([i,j]);
      }
    }
  }
  return options;
}
var findWords = function(board, words) {
  var answer = [];

  var recurse = function(word, index, possibleIndeces){
    console.log("recursing on ", word);
    console.log("at index ", index);
    console.log("possibleIndeces are ", possibleIndeces)
    if (index === word.length-1){
      answer.push(word);
      return;
    } else {
      var next = word[index];
      console.log("next ", next);
      for (var i = 0; i < possibleIndeces.length; i++){
        if (board[possibleIndeces[i][0]][possibleIndeces[i][1]] !== next){
          return;
        } else {
          recurse(word, index+1, touchPoints(possibleIndeces[i]));
        }
    }
    }


  }
  for (var x = 0; x < words.length; x++){
    var word = words[x];
    console.log("word ", word)
    var firstOccurances = findAllOccurances(word[0], board);
    console.log("firstOccurances ", firstOccurances)

    for (var a = 0; a < firstOccurances.length; a++){
      recurse(word, 1, touchPoints(firstOccurances[a]));
    }
  }
  return answer;
}

var board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
];

var words = ["oath","pea","eat","rain"];
//var words = ["eat"];

console.log("expect eat", findWords(board, words));



