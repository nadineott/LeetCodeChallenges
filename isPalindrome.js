//check if string is a palindrome (w/o white spaces and other symbols)


var isPalindrome = function(str){
  //go thru str and convert to arr of just letters
  var arr = [];
  for (var i = 0; i < str.length; i++){
    var current = str[i].charCodeAt();
    if (current > 64 && current < 91 || current > 96 && current < 123){
      arr.push(str[i].toLowerCase());
    }
  }
  for (var j = 0; j < Math.floor(arr.length/2); j++){
    var first = arr[j];
    var second = arr[arr.length-1-j];
    if (first !== second){
      return false;
    }
  }
  return true;
}

console.log("expect true ", isPalindrome ("ab c.b#a"));
console.log("expect true ", isPalindrome("zA2bc@c   B9AZ"));
console.log("expect false ", isPalindrome("abcde"));
console.log("exepct true ", isPalindrome("  "))
