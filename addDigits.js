// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// For example:

// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

var addDigits = function(num) {
    var answer;
    var recurse = function(y) {
      var x = y.toString();
      x = x.split("");
      if (x.length === 1) {
        answer = parseInt(x[0]);
        return;
      } else {
        var current = 0;
        for (var i = 0; i < x.length; i++){
          current = current + parseInt(x[i]);
        }
        recurse(current);
      }
    }
    recurse(num);
    return answer;
};
