// Given an array of negative/positive integers, return the element in the center position of the array.

// If the array has an even number of elements, return the average of the two middle elements instead.

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
