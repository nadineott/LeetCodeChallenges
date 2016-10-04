var getFactors = function(n) {
    var answer = [];
    var options = [];
    var storage = {};
    if (n < 2){
      return answer;
    }
    for (var i = 2; i < n; i++){
      if (Number.isInteger(n/i)){
        options.push(i);
      }
    }
    var permutate = function(str, product){
        if (product > n){
          return;
        } else if (product === n){
          var arr = str.split("");
          arr.sort(function(a,b){return a-b});
          storage[arr] = 1;
          return;
        } else {
          for (var j = 0; j < options.length; j++){
            var newProd = product*options[j]
            var newStr = str+options[j]
            permutate(newStr, newProd)
          }
        }
    }
    permutate("", 1);
  for (var key in storage){
    answer.push(key.split(","));
  }
  for (var x = 0; x < answer.length; x++){
    var current = [];
    for (var m = 0; m < answer[x].length; m++){
      current.push(parseInt(answer[x][m]));
    }
    answer[x] = current;
  }
    return answer;
};
