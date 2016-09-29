//given an array of sorted nums and a target number, return an array of the start and end index of the instnaces of that target

var searchRange = function(nums, target) {
  if (nums.indexOf(target) === -1){
    return [-1, -1];
  }
  var first = nums.indexOf(target);
  var answer = [first, first];
  for (var i = first; i < nums.length; i++){
    if (nums[i] !== target){
      return answer;
    } else {
      answer[1] = i;
    }
  }
  return answer;
};
console.log("expect [3,4] ", searchRange([5, 7, 7, 8, 8, 10], 8))
