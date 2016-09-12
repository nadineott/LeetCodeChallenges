//Given a string, determine if a permutation of the string could form a palindrome.
var canPermutePalindrome = function(s) {
    //determine # of items in s
    //every item except for 1 must appear an even number of times
    //go thru string
    var storage = {};
    var odd = 0;
    var even = 0;
    for (var i = 0; i < s.length; i++) {
        var current = s[i];
        if (!storage[current]) {
            storage[current] = "odd";
            odd++
        } else {
          //if it's odd
            if (storage[current] === "odd") {
                storage[current] = "even";
                odd--;
                even++;
                //if it's even
            } else {
                storage[current] = "odd";
                even--;
                odd++;
            }
        }
    }
    return (odd < 2);
};
