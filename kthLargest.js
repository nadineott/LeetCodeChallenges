  var kthLargest = function(arr, k){
      arr.sort(function(a,b){return a - b});
      return (arr[arr.length-k] || 0);
  }

  console.log("expect 5", kthLargest([3,2,1,5,6,4], 2));
  console.log("expect 0", kthLargest([3,2,1,5,6,4], 9));
