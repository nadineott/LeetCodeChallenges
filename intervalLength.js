//given intervals find overlap and return the length.

var intervalLength = function(int1, int2){
  //put in correct order
  if (int1[0] > int2[0]){
    var temp = int1;
    int1 = int2;
    int2 = temp;
  }
  var difference = int1[1]-int2[0];
  if (difference < 0) return 0;
  else return difference;
  //subtract 0 index in 2nd from 1st index in 1st
  //account for negatives
}

console.log("expect 0", intervalLength([2,7], [7, 10]));
console.log("expect 0", intervalLength([2,5], [5,8]));
console.log("expect 0", intervalLength([2,5], [10,18]))
console.log("expect 3", intervalLength([3,8], [5, 10]));
console.log("expect 2", intervalLength([5,10],[1,7]));
console.log("expect 10", intervalLength([10,20],[10,20]));
