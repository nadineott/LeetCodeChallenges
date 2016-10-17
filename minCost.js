var minCost = function(costs) {
  //find all permutations of indeces with no repeats
  var houses = costs.length;
  var min = Infinity;
  if (houses === 0){
    return 0;
  }
  var permutate = function(count, total, lastIndex, str){
    if (count === houses){
      min = Math.min(total, min);
    }
    else {
      for (var i = 0; i < 3; i++){
        if (lastIndex !== i){
          permutate(count+1, total+costs[count][i], i, str+costs[count][i]);
        }
      }
    }
  }
  permutate(0, 0, 10, "");
  return min;
};

console.log("expect 13", minCost([[20,18,4],[9,9,10]]));
console.log("expect 26 ", minCost([[3,5,3],[6,17,6],[7,13,18],[9,10,18]]))
