var findMin = function(nums) {
    for (var i = 0; i < nums.length-1; i++){
      if (nums[i] > nums[i+1]){
        return nums[i+1];
      }
  }
  return nums[0];
};

console.log("expect 2", findMin([10,11,12,13,14,15,2,4,7,9]))
