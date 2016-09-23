function middle (numbers) {
  //if even
  if (numbers.length % 2 === 0) {
    var mid = numbers.length/2;
    return  (numbers[mid] + numbers[mid-1])/2;
  //if odd
  } else {
    var mid = numbers.length/2 - .5;
    return numbers[mid];
    }
}
