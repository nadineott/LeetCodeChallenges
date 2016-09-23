// gi
var bind = function(func, context){
  //take 1st 2 arguments and store as "previousArguments" array
  var previousArguments = Array.prototype.slice.call(arguments, 2);
  return function(){
    //turn all arguments into array
    var arguments = Array.prototype.slice.call(arguments);
    //concat 1st 2 arguments with all arguments
    arguments = previousArguments.concat(arguments);
    //return original parameter with context set as "this"
    //pass in all arguments
    return func.apply(context, arguments)
  }
};

Function.prototype.bind = function(context) {
  var prevArgs = Array.prototype.slice.call(arguments, 1);
  var func = this;

  return function(){
    var args = Array.prototype.slice.call(arguments);
    args = prevArgs.concat(args);

    return func.apply(context, args)
  }
};
