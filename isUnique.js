var isUnique = function(str){
  str = str.split("");
  for (var i = 0; i < str.length; i++){
    var current = str[0];
    str.splice(0, 1);
    if (str.indexOf(current) !== -1){
      return false;
    }
    i--;
  }
  return true;
}

console.log("expect true ", isUnique("abcde827"));
console.log("expect false ", isUnique("abcdea"));
console.log("expect false ", isUnique("kdiekwpei"));
console.log("expect true ", isUnique(""));
