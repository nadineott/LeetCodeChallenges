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
        for (var j = 1; j < longer.length; j++){
            binary.push(binary[j-1]*2);
        }
    }
    var combinedBinary = [];
    // 1 2 4 8 16
    // 1 2 3 4 5
    //     1 2 3
    for (var i = longer.length-1; i >= 0; i--){

        if (shorter[i]){
            combinedBinary.push(parseInt(longer[i])+parseInt(shorter[i]));
        } else {
            combinedBinary.push(parseInt(longer[i]));
        }
    }
    var result = 0;
    for (var n = 0; n < combinedBinary.length; n++){
        result+= combinedBinary[n]*binary[binary.length-1-n];
    }
    console.log("combined ", combinedBinary)
    console.log("binary ", binary)
    //add a + b
    //multiply it out with key
    return result;
};

console.log("expect 100 ", addBinary("11", "1"))
