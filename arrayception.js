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
