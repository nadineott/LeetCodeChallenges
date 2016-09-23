// Create a function that takes two arrays and determine whether the second array is a subset of the first array. Arrays will only contain primitive values.
//I: [ 2, 3, 3, "a" ],  [3, 3, 3, "a" ] O: false

function isSubset (array, sub) {
  for (var i = 0; i < sub.length; i++) {
    var current = sub[i];
    console.log("current", current);
    for (var j = 0; j < array.length; j++){
      if (current === array[j]) {
        array.splice(j, 1);
        sub.splice(i, 1);
        i--;
        break;
      }
    }
  }
  if (sub.length === 0){
    return true;
  }
  return false;

}
