// Merge two sorted lists.

var merge = function(list1, list2){
  //remove duplicates
  var result = [];
  while (list1.length+list2.length > 0){
    if (list1.length === 0){
      console.log("only list 2 left")
      for (var n = 0; n < list2.length; n++){
        result.push(list2[n]);
      }
      return result;
    }
    if (list2.length === 0){
      console.log("only list 1 left")
      for (var m = 0; m < list1.length; m++){
        result.push(list1[m]);
      }
      return result;
    }
    if (result.indexOf(list1[0]) > -1){
      console.log("repeated number: ", list1[0]);
      list1.shift();
    }
    if (list1[0] < list2[0]){
      result.push(list1[0]);
      list1.shift();
    } else {
      result.push(list2[0]);
      list2.shift();
    }
  }
  //start at beginning of each list, lowest item gets pushed + removed
  //if # already exists in list remove it
  return result;
}

console.log("expect [1,2,3,4,5,6] ", merge([1,2,4,6], [3, 4, 5]))
console.log("expect [1,2,3,4,5,6] ", merge([1,3,5], [2,4,5,6]))
console.log("expect [1,2,100,101] ", merge([1,2],[100,101]))
console.log("expect [1,2,3] ", merge([1,2,3],[1,2,3]))
console.log("expect [0,1,2,3]", merge([1,2,3], [0]))
