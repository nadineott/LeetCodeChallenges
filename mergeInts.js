// Given a collection of intervals, merge all overlapping intervals.

// For example,
// Given [1,3],[2,6],[8,10],[15,18],
// return [1,6],[8,10],[15,18].

var merge = function(intervals){
  var storage = {};
  for (var i = 0; i < intervals.length; i++){
    var first = intervals[i][0];
    var second = intervals[i][1];
    if (!storage[first]){
      storage[first] = second;
    } else {
      storage[first] = Math.max(storage[first], second);
    }
  }
  var orderedSets = [];
  for (var key in storage){
    orderedSets.push([parseInt(key), storage[key]]);
  }
  for (var n = 0; n < orderedSets.length-1; n++){
    var current = orderedSets[n];
    var next = orderedSets[n+1];
    if (current[1] >= next[0]) {
      current[1] = next[1];
      orderedSets.splice(n+1, 1);
      n = n-1;
    }
  }
  return orderedSets;
};
