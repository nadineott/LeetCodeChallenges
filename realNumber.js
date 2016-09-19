// Validate if a given string is numeric.
//NOTE- I would have LOVED to have thought of this problem when I was teaching. I would love nothing more than to explain edge cases to an into intro group, drop this edge case bomb on them, and watch them recoil in terror.

// Some examples:
// "0" => true
// " 0.1 " => true
// "abc" => false
// "1 a" => false
// "2e10" => true

var isNumber = function(s){
  while (s[0] === " "){
    s = s.slice(1, s.length);
  }
  while (s[s.length-1] === " "){
    s = s.slice(0, -1);
  }

  var legitNumber = function(num, allowDecimals){
    if (!allowDecimals && num.indexOf(".") !== -1){
      return false;
    }
    var dec = false;
    if (num[0] === "+" || num[0] === "-"){
      num = num.slice(1, num.length);
    }
    for (var i = 0; i < num.length; i++){
      if (num[i] === "." && !dec && allowDecimals){
        dec = true;
        continue;
      } else if (num[i] === "." && dec){
        return false;
      } else if (isNaN(parseInt(num[i]))){
        return false;
      }
    }
    if (dec && num.length === 1){
      return false;
    } else if (!dec && num.length === 0){
      return false;
    }else {
      return true;
    }
  }

  var e = s.indexOf("e");
  if (e === -1){
    return legitNumber(s, true);
  } else {
    var arrs = s.split("e");
    if (arrs.length > 2){
      return false;
    }
    var first = legitNumber(arrs[0], true);
    var second = legitNumber(arrs[1], false);
    return (first === true && second === true)
  }
}
