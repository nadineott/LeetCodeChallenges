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

//TESTg
asyncMap([
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
  },
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 100);
  }
 ],
  function(results){
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
 });
