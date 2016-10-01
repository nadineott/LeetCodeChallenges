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

var mAndB = function(x, y, xx, yy){
  var slope = (x-xx)/(y-yy);
    var yInt = -1*((slope*x)-y);
    var slopeInt = ""+slope+yInt;
    return slopeInt;
}

var findDiagonals = function(arr){
  var max = 0;
  var storage = {};
  for (var i = 0; i < arr.length; i++){
    var firstX = arr[i][0];
    var firstY = arr[i][1];
    for (var j = i+1; j < arr.length; j++){
        if (firstX !== secondX && firstY !== secondY){
        var secondX = arr[j][0];
        var secondY = arr[j][1];
        var slope = mAndB(firstX, firstY, secondX, secondY);
        if (!storage[slope]){
          storage[slope] = 1;
        } else {
          storage[slope] = storage[slope]+1;
        }
      }
    }
  }
  for (var key in storage){
    if (storage[key] > max){
      max = storage[key];
    }
  }
  return max;
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
  return max;
}var maxPoints = function(points) {
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

var mAndB = function(x, y, xx, yy){
  var slope = (x-xx)/(y-yy);
    var yInt = -1*((slope*x)-y);
    var slopeInt = ""+slope+yInt;
    return slopeInt;
}

var findDiagonals = function(arr){
  var max = 0;
  var storage = {};
  for (var i = 0; i < arr.length; i++){
    var firstX = arr[i][0];
    var firstY = arr[i][1];
    for (var j = i+1; j < arr.length; j++){
        if (firstX !== secondX && firstY !== secondY){
        var secondX = arr[j][0];
        var secondY = arr[j][1];
        var slope = mAndB(firstX, firstY, secondX, secondY);
        if (!storage[slope]){
          storage[slope] = 1;
        } else {
          storage[slope] = storage[slope]+1;
        }
      }
    }
  }
  for (var key in storage){
    if (storage[key] > max){
      max = storage[key];
    }
  }
  return max;
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
  return max;
}
