var minCost = function(costs) {
    if (costs.length === 0){
        return 0;
    }
    var options = [costs[0][0], costs[1][0], costs[2][0]]
  options.sort(function(a,b){return a-b});
  var firstColor = Math.ceil(costs[0].length/2);
  var secondColor = Math.floor(costs[0].length/2);
  var total = firstColor*options[0] + secondColor*options[1];
  return total;
};
g
