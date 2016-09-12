// Given an array of integers, every element appears twice except for one. Find that single one.

var singleNumber = function(nums) {
    var orderedNums = nums.sort(function(a,b){return a-b});
    for (var i = 0; i < orderedNums.length; i+=2){
      if (orderedNums[i] !== orderedNums[i+1]){
        return orderedNums[i];
      }
    }
    return false;
};
