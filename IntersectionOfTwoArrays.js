
// Given two arrays, return all values that are common to both arrays in a non repeated array
// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

var intersection = function(nums1, nums2) {
  var answer = [];
  var answers = {};
  var longer;
  var shorter;
  if (nums1.length > nums2.length){
    longer = nums1;
    shorter = nums2;
  } else {
    shorter = nums1;
    longer = nums2;
  }
    for (var i = 0; i < longer.length; i++){
      var current = longer[i];
      if (shorter.indexOf(current) > -1){
        answers[current] = true;
      }
    }
    for (var key in answers){
      answer.push(parseInt(key));
    }
    return answer;
};
