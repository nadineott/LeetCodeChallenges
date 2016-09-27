//given an array and a subarray size xgi, find the maximum deviation of any subarray with given size x

var deviation = function(arr, x){
  var max = Number.NEGATIVE_INFINITY;
  var devHelper = function(arr3){
    arr3 = arr3.sort(function(a,b){return a-b});
    return arr3[2] - arr3[0];
  }
  for (var i = 0; i < arr.length-x+1; i++){
    var subArr = arr.slice(i, i+3);
    var dev = devHelper(subArr);
    if (dev > max){
      max = dev;
    }
  }
  return max;
}
