// Given a nested list of integers, return the sum of all integers in the list weighted by their depth.

// Each element is either an integer, or a list -- whose elements may also be integers or other lists.

// Example 1:
// Given the list [[1,1],2,[1,1]], return 10. (four 1's at depth 2, one 2 at depth 1)

var depthSum = function(nestedList) {
    var storage = {};
    var total = 0;
    var inner = function(list, level) {
        for (var i = 0; i < list.length; i++) {
            if (Array.isArray(list[i])) {
                inner(list[i], level+1);
            } else {
                if (!storage[level]) {
                    storage[level] = list[i];
                } else {
                    storage[level] += list[i];
                }
            }
        }
    };
    inner(nestedList, 1);
    for (var key in storage) {
      total = total + key*storage[key];
    }
return total;
};
