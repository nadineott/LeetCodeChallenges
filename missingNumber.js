// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// For example,
// Given nums = [0, 1, 3] return 2.
//If all numbers are in order, return the next number that should be in the array

var missingNumber = function(nums) {
    nums.sort(function(a,b){return a-b});
    if (nums[0] !== 0){
        return 0;
    }
    for (var i = 0; i < nums.length-1; i++){
        if (nums[i+1] !== nums[i]+1){
            return nums[i]+1;
        }
    }
    return nums[nums.length-1]+1;
};
