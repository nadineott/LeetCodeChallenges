//rewrite pow(x,n) as if it doesn't exist
//note: this is a great exercise for edge cases, without them the function will time out frequently

var myPow = function(x, n) {
  var answer = x;
  var neg = false;
  if (n === 0 || x === 1) {
      return 1;
  } else if (x === -1){
    if (n%2 === 0){
      return 1;
    } return -1;
  } else if (n < 0){
    n = n*-1;
    neg = true;
  }
    for (var i = 1; i < n; i++){
      if (answer === 0){
        break;
      }
      else if (answer === Infinity){
        break;
      }else {
          answer = answer*x;
      }
    }
    if (neg){
      return 1/answer;
    }
    return answer;
};
