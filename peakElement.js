var findPeakElement = function(nums) {
    //edge cases: 1 item or 0 items
    if (nums.length === 1){
      return 0;
    } else if (nums.length === 0){
      return -1;
    }
    else if (nums.length === 2){
        if (nums[0] > nums[1]){
            return 0;
        } return 1;
    }
    var max = Number.NEGATIVE_INFINITY;
    var maxIndex;
    for (var i = 0; i < nums.length; i++){
      if (nums[i-1] < nums[i] && nums[i+1] < nums[i]){
        return i;
      }
      else if (nums[i] > max){
          max = nums[i];
          maxIndex = i;
      }
    }
    return maxIndex;
}

console.log("expect 0", findPeakElement([5,4,3,2,1]))
console.log("expect 3", findPeakElement([0,1,2,3,2]))
console.log("expect 2", findPeakElement([2,2,3,0]))
console.log("expect 0", findPeakElement([2]))
console.log("expect 2", findPeakElement([1,2,3,1]))
console.log("expect 2", findPeakElement([1,2,3]))
