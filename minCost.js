var minCost = function(costs) {
  var houses = costs.length;
  if (houses === 0){
    return 0;
  }
  var options = [costs[0][0], costs[0][1], costs[0][2]];
  options.sort(function(a,b){return a-b});
  var total = Math.ceil(houses/2)*options[0] + Math.floor(houses/2)*options[1];
  return total;
};
