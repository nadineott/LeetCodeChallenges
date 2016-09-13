// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

var firstUniqChar = function(s) {
  var storage = {};
  for (var i = 0; i < s.length; i++){
    if (!storage[s[i]]) {
      storage[s[i]] = 1;
    } else {
      storage[s[i]] = storage[s[i]]+1;
    }
  }
  for (var key in storage){
    if (storage[key] === 1){
      return s.indexOf(key)
    }
  }
  return -1;
};
