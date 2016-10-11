var asyncMap = function(funcList, cb){
  var counter = 0;
  var results = [];
  for (var i = 0; i < funcList.length; i++){
    (function(index){
      funcList[index](function(returnValue){
        results[index] = returnValue;
        counter++;
        if (counter === funcList.length){
          cb(results);
        }
      })
    })(i)
  }
}
