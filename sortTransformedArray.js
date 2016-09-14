// Given a sorted array of integers nums and integer values a, b and c. Apply a function of the form f(x) = ax^2 + bx + c to each element x in the array.

// The returned array must be in sorted order.

// Expected time complexity: O(n)

// Example:
// nums = [-4, -2, 2, 4], a = 1, b = 3, c = 5,

// Result: [3, 9, 15, 33]

// nums = [-4, -2, 2, 4], a = -1, b = 3, c = 5


var sortTransformedArray = function(nums, a, b, c) {
  var result = [];
    for (var i = 0; i < nums.length; i++){
      var x = nums[i];
      result.push(a*Math.pow(x,2) + b*x + c);
    }
    return result.sort(function(a,b){return a-b});
};
