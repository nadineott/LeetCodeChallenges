// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
//Input [ [ 5 ], [ [ ] ] ] output 2
//Input [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] Output 4
//Input [ [ [ ] ] ] Output 0
var arrayception = function(arr){
  var options = [0];
  var recurse = function(x, level) {
    for (var i = 0; i < x.length; i++) {
      if (!Array.isArray(x[i])) {
        options.push(level+1);
      } else {
        recurse(x[i], level+1);
      }
    }
  }
  recurse(arr, 0);
  options.sort(function(a,b){return a-b});
  return options[options.length-1];
}
