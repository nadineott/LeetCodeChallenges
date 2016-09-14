// Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

var combinationSum4 = function(nums, target) {
  var answers = 0;
    var permutate = function(total){
      if (total === target){
        answers++;
        return;
      } else if (total > target){
        return;
      } else {
        for (var i = 0; i < nums.length; i++){
          var newtotal = total+nums[i];
          permutate(newtotal);
        }
      }
    };
    permutate(0);
    return answers;
};
