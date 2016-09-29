// Find the contiguous subarray within an array (containing at least one number) which has the largest product.

// For example, given the array [2,3,-2,4],
// the contiguous subarray [2,3] has the largest product = 6
//Accidently did this with sum first and couldn't figure out why it wasn't working. Silly mistake.

var maxProduct = function(nums) {
    var max = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < nums.length; i++){
      var total = 1;
      for (var k = i; k < nums.length; k++){
        total = total*nums[k];
        max = Math.max(max, total);
      }
    }
    return max;
};

console.log("expect 6", maxProduct([2,3,-2,4]));
