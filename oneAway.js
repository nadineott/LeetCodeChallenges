var oneAway = function(str1, str2){
  str1 = str1.split("");
  str2 = str2.split("");
  var offBy = Math.abs(str1.length-str2.length);
  if (offBy > 1){
    return false;
  } //1 letter added to longer string
  else if (offBy === 1){
    var shorter = str1;
    var longer = str2;

    if (str1.length > str2.length){
      shorter = str2;
      longer = str1;
    }
    for (var i = 0; i < shorter.length; i++){
      if (longer.indexOf(shorter[i]) === -1){
        return false;
      } else {
        longer.splice(longer.indexOf(shorter[i]), 1);
      }
    }
    return true;
  } //1 replacement
  else {
    var counter = 0;
    for (var i = 0; i < str1.length; i++){
      var current = str1[i];
      if (str2.indexOf(current) === -1){
        counter++;
        if (counter > 1){
          return false;
        }
      }
      str2.splice(str2.indexOf(current), 1);
    }
    return true;
  }
}
