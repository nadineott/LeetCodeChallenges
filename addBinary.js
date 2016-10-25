var addBinary = function(a, b) {
    //define longer and shorter inputs
    var shorter = a;
    var longer = b;
    if (a.length > b.length){
        longer = a;
        shorter = b;
    }
    var binary = [1];
    //create binary key for max number needed
    if (longer.length > 1){
        for (var i = 1; i < longer.length; i++){
            binary.push(binary[i-1]*2);
        }
    }
    var combinedBinary = [];
    for ()
    //add a + b
    //multiply it out with key

};
