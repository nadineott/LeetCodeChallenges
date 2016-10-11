var depthSumInverse = function(nestedList) {
  var storage = {};
  var recurse = function(arr, depth){
    for (var i = 0; i < arr.length; i++){
      if (!Array.isArray(arr[i])){
        if (!storage[depth]){
          storage[depth] = arr[i];
        } else {
          storage[depth] = storage[depth]+arr[i];
        }
      } else {
        recurse(arr[i], depth+1);
      }
    }
  }
  recurse(nestedList, 1);
  console.log('storage ', storage)
  var depths = [];
  var values = [];
  for (var key in storage){
    depths.push(parseInt(key));
    values.push(storage[key])
  }
  var total = 0;
  for (var i = 0; i < depths.length; i++){
    total+= depths[i]*values[depths.length-i-1];
  }
  return total;
};

console.log("expect 17 ", depthSumInverse([1,[4,[6]]]));
//1*6 + 2*4 + 3*1
console.log("expect 8", depthSumInverse([[1,1],2,[1,1]]))
