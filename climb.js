//Given an array, find the minimum number x that could be added or subtracted from each item in the array so it is strictly sequential (no repeats)

var itsTheClimb = function(arr){
  var max = 0;
  for (var i = 0; i < arr.length-1; i++){
    console.log("arr ", arr)
    var current = arr[i];
    var next = arr[i+1];
    if (current >= next){
      max = Math.max(max, (current-next)+1);
      arr[i+1] = current+1;
    }
  }
  return Math.floor(max/2);
}
