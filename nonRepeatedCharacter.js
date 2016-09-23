// Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.

//"ABCDBIRDUP" --> A
//"XXXXXXX" --> "sorry"

function firstNonRepeatedCharacter (string) {

//EDGE CASES
//if string is empty return "sorry"
  if (string.length === 0) {
    return "sorry";
  }
  if (string.length === 1) {
    return string;
  }


    for (var i = 0; i < string.length; i++) {
      console.log("comparing to "+ string[i]);
        var matches = 0;
        var currentValue = string[i];
      for (var k = 0; k < string.length; k++) {
        if (currentValue === string[k]) {
          matches++
        }
      }
          if (matches === 1) {
          return currentValue;
        }
}
return "sorry";
}
