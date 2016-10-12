function Node(data){
  this.data = data;
  this.children = [];
  this.parent = null;
}

function Tree(data){
  var node = new Node(data);
  this.root = node;
}

//var family = new Tree("1");

//console.log(family)

Tree.prototype.traverseDF = function(callback){

  var recurse = function(currentNode){
    callback(currentNode);
    for (var i = 0; i < currentNode.children.length; i++){
      recurse(currentNode.children[i]);
    }
  }
  recurse(this.root);

}

Tree.prototype.traverseBF = function(callback){
  var queue = [];
  queue.push(this.root);
  var current = queue.shift();
  while (current){
    for (var i = 0; i < current.children.length; i++){
      queue.push(current.children[i]);
    }
    callback(current);
    current = queue.shift();
  }
}
g
