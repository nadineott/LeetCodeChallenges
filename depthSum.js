// Given the list [[1,1],2,[1,1]], return 10. (four 1's at depth 2, one 2 at depth 1)

var depthSum = function(nestedList){
  var total = 0;
  var recurse = function(arr, depth){
    for (var i = 0; i < arr.length; i++){
      if (Array.isArray(arr[i])){
        recurse(arr[i], depth+1);
      } else {
        total = total+ arr[i]*depth;
      }
    }
  }
  recurse(nestedList, 1);
  return total;
}
