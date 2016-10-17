var merge = function(list1, list2){
  var results = [];
  while (list1.length + list2.length > 0){

    var short = list1;
    var long = list2
    //if one is 0 push all from 2nd to results
    if (list1.length > list2.length){
      long = list1;
      short = list2;
    }
    if (short.length === 0){
      for (var j = 0; j < long.length; j++){
        results.push(long[j]);
        long.shift();
        j--;
      }
    }
    //if numbers are the same at 0, push 1 and shift it out of the other list2
    else if (short[0] > long[0]){
      results.push(long[0]);
      long.shift();
    } else {
      results.push(short[0]);
      short.shift();
    }
    //else push lowest one and shift it out
  }
  for (var k = 0; k < results.length-1; k++){
    if (results[k] === results[k+1]){
      results.splice(k,1);
      k--;
    }
  }
  //remove repeats
  return results;
}

console.log("expect [1,2,3,4,5,6] ", merge([1,2,4,6], [3, 4, 5]))
console.log("expect [1,2,3,4,5,6] ", merge([1,3,5], [2,4,5,6]))
console.log("expect [1,2,100,101] ", merge([1,2],[100,101]))
console.log("expect [1,2,3] ", merge([1,2,3],[1,2,3]))
console.log("expect [0,1,2,3]", merge([1,2,3], [0]))
