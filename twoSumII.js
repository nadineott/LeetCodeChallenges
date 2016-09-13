// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

// You may assume that each input would have exactly one solution.

// Input: numbers={2, 7, 11, 15}, target=9
// Output: index1=1, index2=2

var twoSum = function(numbers, target) {
    var storage = {};
    for (var i = 0; i < numbers.length; i++){
      if (!storage[numbers[i]]) {
        storage[numbers[i]] = 1;
      } else {
        storage[numbers[i]] = storage[numbers[i]]+1;
      }
    }
  for (var key in storage){
    var current = parseInt(key);
    var needed = target-current;
    if (storage[needed]){
      if (current === needed && storage[current] > 1){
        var ans = [numbers.indexOf(current)+1, numbers.indexOf(current)+2].sort(function(a,b){return a-b});
        return ans;
      }
      else {
        ans = [numbers.indexOf(current)+1, numbers.indexOf(needed)+1].sort(function(a,b){return a-b});
        return ans;
      }
    }
  }
  return false;
};
