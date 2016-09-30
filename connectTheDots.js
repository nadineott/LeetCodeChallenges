var maxPoints = function(points) {
    points = Array.prototype.slice.call(arguments);
  //early return cases
  if (points.length < 3){
    if (points[0].length === 0){
      return 0;
    }
    return points.length;
  }
    var horizontal = findLines(points, 0);
    var vertical = findLines(points, 1);
    //early return opportunity: since diagonal is going to be the most expensive function, if there is a horizontal or vertical line that is the max, no need to run diagonal
    if (horizontal === points.length || vertical === points.length){
      return horizontal;
    }
    var diagonal = findDiagonals(points);

    return Math.max(horizontal, vertical, diagonal);
};

var findDiagonals = function(arr){
  console.log("DIAGONALS")
  var storage = {};
  var max = 0;
    //diagonal lines:
      //find all combinations of 2 points that don't share x or y
    for (var i = 0; i < arr.length; i++){
      var firstX = arr[i][0];
      var firstY = arr[i][1];
      for (var j = 0; j < arr.length; j++){
        var secondX = arr[j][0];
        var secondY = arr[j][1];
        if (i !== j && firstX !== secondX && firstY !== secondY){
          var slope = (firstX-secondX)/(firstY-secondY);
          var yInt = -1*((slope*firstX)-firstY);
          var slopeInt = ""+slope+yInt;
          if (!storage[slopeInt]){
            storage[slopeInt] = 1;
          } else {
            storage[slopeInt] = storage[slopeInt]+1;
          }
        }
      }
    }
    for (var key in storage){
      if (storage[key] > max){
        max = storage[key];
      }
    }
    console.log(max)
    return max;
      //determine slope and y intercept that two points make
      //create array of all points with same slope and y-int
    //longest array of diagonals OR vertical/horizontal lines wins
}

var findLines = function(arr, num){
  var storage = {};
  var max = 0;
  for (var i = 0; i < arr.length; i++){
    var current = arr[i][num];
    if (storage[current] === undefined){
      storage[current] = 1;
      } else {
      storage[current] = storage[current]+1;
      }
  }
  for (var key in storage){
    if (storage[key] > max){
      max = storage[key];
    }
  }
  console.log(num, max)
  return max;
}

console.log("expect 3 ", maxPoints([0,1], [9,12], [0,2], [0,6], [9, 15]))
console.log("expect 0 ", maxPoints([]));
console.log("expect 1 ", maxPoints([2,4]))
console.log("expect 2 ", maxPoints([2,5], [3,7]))
console.log("expect 5 (diagonal)", maxPoints([1,4], [2,3], [3,2], [4,1], [5,0]))
console.log("expect 3 (diagonal) ", maxPoints ([1,1], [2,2], [4,4], [3,13], [19,20]))
