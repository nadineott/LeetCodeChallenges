//Create an isNumber(string) function. Handle signed / unsigned, floating point, any number of digits, etc. Probably commas, and currency signs, or whatever

//can only be one currency sign, must be first thing
//note if it is negative (can only have one sign), must be 0th index if no currency or 1st if currency
//note if there is a decimal (can only have one)
//commas can only occur before decimal and every 3 from the right
//could it end in USD or other currency notation?

//first note if index 0 is $ or cent sign, if it is currency has been used, start index is 1st
//if start index is negative note that it's been used and set start index to be one more out
//if there is a decimal digits before it need to be tested for proper comma placement and after need to be tested for no commas

var isNumber = function(str){
  var startIndex = 0;
  var decimal = false;
  if (str[0] === "$"){
    startIndex++;
  }
  if (str[startIndex] === "-"){
    startIndex++;
  }
  var decimalSplit = str.split(".");
  if (decimalSplit.length === 3){
    return false;
  }
  var beforeDecimal = decimalSplit[0];
  beforeDecimal = beforeDecimal.split("");
  var afterDecimal = decimalSplit[1];
  //test pre-decimal for correct commas and only numbers
  var counter = 0;
  for (var j = beforeDecimal.length-1; j > startIndex-1 ; j--){
    counter++;
    if (counter === 4){
      if (beforeDecimal[j] !== ","){
        return false;
      } else {
        counter = 0;
      }
    } else {
      if (isNaN(parseInt(beforeDecimal[j]))){
        return false;
      }
    }

  }
  //test post decimal for nothing but digits
  for (var i = 0; i < afterDecimal.length; i++){
    if (isNaN(parseInt(afterDecimal[i]))){
      return false;
    }
  }
  return true;
}

console.log("expect true", isNumber("$100,000.34"));
console.log("expect true", isNumber("-34.21"));
console.log("expect true", isNumber(".392"));
console.log("expect false", isNumber("102.34.12"));
console.log("expect false", isNumber("23.$56"));

