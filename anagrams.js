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
