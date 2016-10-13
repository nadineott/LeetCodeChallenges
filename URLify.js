var URLify = function(str){
  var start = 0;
  var end = str.length;
  for (var i = 0; i < str.length; i++){
    if (str[i] === " "){
      start++;
    } else {
      break;
    }
  }
  for (var j = str.length-1; j > -1; j--){
    if (str[j] === " "){
      end--;
    } else {
      break;
    }
  }
  var str2 = "";
  for (var k = start; k < end; k++){
    str2+= str[k];
  }
  var arrs = str2.split(" ");
  return arrs.join("%20");
}
