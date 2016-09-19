// Validate if a given string is numeric.

// Some examples:
// "0" => true
// " 0.1 " => true
// "abc" => false
// "1 a" => false
// "2e10" => true

var isNumber = function(s) {
  var dec = false;
  var before;
  var after;
  var nums = false;
  var trueBeginning = true;
  for (var i = 0; i < s.length; i++){
    if (isNaN(parseInt(s[i]))) {
        //ignore spaces if they're at the very beginning or very end
      if (s[i] === " " && i === 0 && s.length > 0 && trueBeginning){
          s = s.slice(1, s.length);
          i--;
          continue;
      }
      if(s[i] === " " && i !== 0) {
          for (var k = i; k < s.length; k++){
            if (s[k] !== " "){
              console.log("space in the middle")
              return false;

            }
          }
          return nums;
      }
      if ((s[i] === "-" || s[i] === "+") && i === 0){
        s = s.slice(1, s.length);
        trueBeginning = false;
        i--;
        continue;
      }
      //make sure there's only one decimal and there are other things in string
      if (s[i] === "." && !dec && s.length !== 1){
        dec = true;
        after = true;
        before = false;
        continue;
      //make sure e is preceeded + followed by numbers
      } if (s[i] === "e" && (i > 0 && i < s.length) && before && i !== s.length-1){
          for (var j = i+1; j < s.length; j++){
              if (isNaN(parseInt(s[j]))){ return false;}
          }
          return true;
      }
      else {
        console.log("early return")
        return false;
      }
    }
    else {
      before = true;
      nums = true;
    }
  }
  return nums;
};
