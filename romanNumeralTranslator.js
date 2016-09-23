// Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

// In a roman numeral, each character adds its value to the total. See the helper object DIGIT_VALUES for the correspondence between roman numeral characters and integers.
// VI = 6 (5 + 1 = 6)
// LXX = 70 (50 + 10 + 10 = 70)
// MCC = 1200 (1000 + 100 + 100 = 1200)

// When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.
// IV = 4 (5 – 1 = 4)
// XC = 90 (100 – 10 = 90)
// CM = 900 (1000 – 100 = 900)

// You should return "null" on invalid input.

  function translateRomanNumeral(romanNumeral) {
    //iterate thru and change to digit values in array
    var array = [];
    for (var i = 0; i < romanNumeral.length; i++) {
      var current = romanNumeral[i];
      if (!DIGIT_VALUES[current]) {
        return "null";
      } else {
        array.push(DIGIT_VALUES[current]);
      }
    }
    //for each 2 items in array decide if addition of subtraction is needed
    for (var i = 0; i < array.length; i++) {
      if (array[i] < array[i + 1] && array[i] !== 0) {
        array[i]  = array[i + 1] - array[i];
        array[i + 1] = 0;
      }
    }
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    return sum;
  }
