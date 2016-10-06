// Find out at least one 3 elements array in a given integer array. The 3 elements have to be able to form a triangle.

var createTriangle = function(arr){
  //a+b > c
  //sum of 2 smallest has to be greater than largest
  var sorted = arr.sort(function(a,b){return a-b});
    for (var i = 0; i < sorted.length-2; i++){
      var sum = sorted[i] + sorted[i+1];
      if (sum > sorted[i+2]){
        return [sorted[i], sorted[i+1], sorted[i+2]];
      }
    }
    return false;
}

console.log("expect [3,7,8]", createTriangle([1,3,7,98,8,23, 2]));
console.log("expect [30,40,65]", createTriangle([30, 2, 90, 40,65]));
