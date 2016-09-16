//isomorphic words
//note: not the driest code

var isIsomorphic = function(s, t) {
  var map = {};
  for (var i = 0; i < s.length; i++){
    if (!map[s[i]]) {
      map[s[i]] = t[i];
    } else if (map[s[i]] !== t[i]){
      return false;
    }
  }
  var map2 = {};
  for (var j = 0; j < t.length; j++){
    if (!map2[t[j]]) {
      map2[t[j]] = s[j];
    } else if (map2[t[j]] !== s[j]){
      return false;
    }
  }
  return true;
};
