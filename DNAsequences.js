// All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

// Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

var findRepeatedDnaSequences = function(s) {
  var answer = [];
  var storage = {};
  for (var i = 0; i < s.length-9; i++){
    var substr = s.slice(i, i+10);
    if (!storage[substr]){
      storage[substr] = 1;
    } else {
      storage[substr] = storage[substr]+1
    }
  }
  for (var key in storage){
    if (storage[key] > 1){
      answer.push(key);
    }
  }
  return answer;
};

console.log("expect [AAAAAAAAAAAA] ", findRepeatedDnaSequences("AAAAAAAAAAAA"));
