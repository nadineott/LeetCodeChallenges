var fullJustify = function(words, maxWidth) {
  var lines = [];
  var line = [];
  var lineLength = 0;
  var answer = [];
  for (var word = 0; word < words.length; word++){
    if (line.length === 0){
      line.push(words[word]);
      lineLength = words[word].length;
    } else {
      if (lineLength + words[word].length+1 > maxWidth){
        lines.push(line);
        line = [];
        words.splice(0, word-1);
        word = 0;
      } else {
        lineLength += words[word].length +1;
        line.push(words[word]);
      }
    }
  }
  lines.push(line);

  //last line is treated differently- just add extra spaces as needed at end
  for (var i = 0; i < lines.length-1; i++){
    var current = lines[i];
    var opportunities = current.length -1;
    var wordLengths = 0;
    for (var j = 0; j < current.length; j++){
      wordLengths += current[j].length;
    }
    var spaces = maxWidth - opportunities - wordLengths;
    var average = spaces/opportunities;
    if (Number.isInteger(average)){
      var s = "";
      for (var k = 0; k < average; k++){
        s = s + " ";
      }
      current = current.join(s);
      answer.push(current);
    } else {
      var less = Math.floor(average);
      var more = Math.ceiling(average);
      //put more on left side and less on right side, if opportunities-2 is 0 then we're good!
      //if more+less is an integer then
    }
  }
  //deal with last line

  //for all other lines, length-1 is the number of opportunities for spaces
  //maxWidth - word lengths - opportunities(which will represent one space each to start) is the number of spaces that need to be inserted

  return answer;
};


console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
