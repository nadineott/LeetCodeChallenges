// return boolean if num is perfect square without using sqrt

var isPerfectSquare = function(num) {
    for (var i = 0; i < Infinity; i++){
        if (i*i === num){
            return true;
        } else if (i*i > num){
            return false;
        }
    }
};
