// Given a non-empty array of integers, return the k most frequent elements.

// For example,
// Given [1,1,1,2,2,3] and k = 2, return [1,2].

var topKFrequent = function(nums, k) {
    var storage = {};
    for (var i = 0; i < nums.length; i++){
      var current = nums[i];
      if (!storage[current]){
        storage[current] =1;
      } else {
        storage[current] = storage[current]+1;
      }
    }
    var frequencyArray = [];
    for(var n in storage){
      frequencyArray.push(storage[n]);
    }
    frequencyArray.sort(function(a,b){return a-b});
    var answer = [];
    for (var j = 0; j < k; j++){
      var currentFrequency = frequencyArray[frequencyArray.length-1-j];
      for (var key in storage){
        if (storage[key] === currentFrequency){
          answer.push(parseInt(key));
          storage[key] = 0;
        }
      }
    }

    return answer;
};
