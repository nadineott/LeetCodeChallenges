// Given two strings, return true if one string is an anagram of another.

function isAnagram (a, b) {
  //take out spaces and cases of both strings
  var removeSpaceAndCase = function(str, newString) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        newString = newString + str[i].toLowerCase();
      }
    }
    return newString;
  }
  var aStr = removeSpaceAndCase(a, "");
  var bStr = removeSpaceAndCase(b, "");

  //optimize for non equal lengths
  if (aStr.length !== bStr.length) {
    return false;
  }
  //go thru one string, for each splice it out of the other
  for (var i = 0; i < aStr.length-1; i++) {
    var current = aStr[i];
    var index = bStr.indexOf(current);
    if (bStr.indexOf(current) < 0) {
      return false;
    } else {
      var bString = bStr;
      var first = bString.slice(0, index);
      var last = bString.slice(index+1);
      bStr = first + last;
    }
  }
  if (aStr[aStr.length-1] === bStr[bStr.length-1]) {
    return true;
  }
  return false;
}


//ALTERNATIVE, JUST DID THIS AGAIN AND I THINK THE ANSWER BELOW IS MORE INTUITIVE

var isAnagram = function(str1, str2){
  var word1 = str1.split("");
  var word2 = str2.split("");

  var removeSpaceAndCapitlization = function(arr){
    for (var j = 0; j < arr.length; j++){
      if (arr[j] === " "){
        arr.splice(j, 1);
        j--;
      } else {
        arr[j] = arr[j].toLowerCase();
      }
    }
    return arr;
  }
  word1 = removeSpaceAndCapitlization(word1);
  word2 = removeSpaceAndCapitlization(word2);
  for (var i = 0; i < word1.length; i++){
    var current = word1[i];
    var word2Index = word2.indexOf(current);
    if (word2Index === -1){
      return false;
    } else {
      word2.splice(word2Index, 1);
    }
  }
  if (word2.length === 0){
    return true;
  }
  return false;
}
