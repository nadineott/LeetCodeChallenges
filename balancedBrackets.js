//An oldie but a goodie, given a string, determine if the brackets/parens are balanced. Return a boolean

//Expect "(((10 ) ()) ((?)(:)))" to be true and "[{]}" to be false

  var answer = false;
  var openBrackets = {
    "[": 1,
    "(": 2,
    "{": 3
  };
  var closeBrackets = {
    "]": 1,
    ")": 2,
    "}": 3
  };
  var opens = 0;
  var closes = 0;
  var arr = [];
  for (var i = 0; i < str.length; i++){
    if (openBrackets[str[i]]){
      arr.push(str[i]);
      opens+1;
    } else if (closeBrackets[str[i]]){
      arr.push(str[i]);
      closes+1;
    }
  }
  if (opens !== closes){
    return false;
  }
  var recurse = function(array){
    if (array.length === 0){
      answer = true;
      return;
    }
    else if (array.length %2 !== 0 || openBrackets[array[array.length-1]]){
      answer = false;
      return;
    }
    else {
      for (var j = 0; j < array.length-1; j++){
        var current = array[j];
        var next = array[j+1];
        if ((openBrackets[current] && closeBrackets[next]) && (openBrackets[current] === closeBrackets[next])){
          array.splice(j, 2);
          recurse(array);
        }
      }
    }
  }
  recurse(arr);
  return answer;
};
