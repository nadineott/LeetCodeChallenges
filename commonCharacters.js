// Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

// Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.

// Example: commonCharacters('acexivou', 'aegihobu')

// Returns: 'aeiou'

commonCharacters = function(string1, string2){
  var commonCharacters = [];
  var nonRepeatedCharacters = "";
  //find common characters
  for (var i = 0; i < string1.length; i++) {
    for (j = 0; j < string2.length; j++) {
      if (string2[j] === string1[i] && string2[j] !== " ") {
        commonCharacters.push(string1[i]);
      }
    }
  }
  //remove duplicates
  for (var i = 0; i < commonCharacters.length; i++) {
    if (nonRepeatedCharacters.indexOf(commonCharacters[i]) === -1) {
      (nonRepeatedCharacters += commonCharacters[i]);
    }
  }
  return nonRepeatedCharacters;
};
