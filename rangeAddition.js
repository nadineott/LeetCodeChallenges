// Assume you have an array of length n initialized with all 0's and are given k update operations.

// Each operation is represented as a triplet: [startIndex, endIndex, inc] which increments each element of subarray A[startIndex ... endIndex] (startIndex and endIndex inclusive) with inc.

// Return the modified array after all k operations were executed.

// Example:

// Given:

//     length = 5,
//     updates = [
//         [1,  3,  2],
//         [2,  4,  3],
//         [0,  2, -2]
//     ]

// Output:

//     [-2, 0, 3, 5, 3]

var getModifiedArray = function(length, updates) {
    var arr = [];
    for (var i = 0; i < length; i++) {
      arr.push(0);
    }
    for (var j = 0; j < updates.length; j++){
      var start = updates[j][0];
      var end = updates[j][1];
      var change = updates[j][2];
      for (var k = start; k < end+1; k++){
        arr[k] += change;
      }
    }
    return arr;
};
