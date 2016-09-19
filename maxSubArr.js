// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

var maxSubArray = function(nums) {
  var ans = [];

  var currentMax = nums[0];
  var currentMin = nums[0];

  for (var i = 0; i < nums.length; i++){
    var total = 0;
    for (var j = i; j < nums.length; j++){
      total+= nums[j];
      if (total > currentMax){
        currentMax = total;
      }
      if (total < currentMin){
        currentMin = total;
        continue;
      }
    }
  }

  return currentMax;
};
