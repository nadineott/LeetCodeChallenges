var divide = function(x, y){
  //solve for negative y
  //solve for negative x and negative y
  if (y === 1){
    return x;
  } else if (x === 0){
    return 0;
  }
  else if (y === 0){
    return Infinity;
  }
  //solve for decimals
  else {
    //find number that multiplied by y === x
    for (var i = 1; i < Infinity; i++){
      if (i*y === x){
        return i;
      }
    }
  }

}

console.log("expect 4", divide(12, 3))
console.log("expect 3", divide(12, 4))
console.log("expect Infinity", divide(10, 0))
console.log("expect 2", divide(8,4))
