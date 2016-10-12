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

var tree = new Tree('one');

tree.root.children.push(new Node('two'));
tree.root.children[0].parent = tree;

tree.root.children.push(new Node('three'));
tree.root.children[1].parent = tree;

tree.root.children.push(new Node('four'));
tree.root.children[2].parent = tree;

tree.root.children[0].children.push(new Node('five'));
tree.root.children[0].children[0].parent = tree.root.children[0];

tree.root.children[0].children.push(new Node('six'));
tree.root.children[0].children[1].parent = tree.root.children[0];

tree.root.children[2].children.push(new Node('seven'));
tree.root.children[2].children[0].parent = tree.root.children[2];
console.log("DEPTH FIRST")
tree.traverseDF(function(x){console.log(x.data)})
console.log("BREADTH FIRST")
tree.traverseBF(function(x){console.log(x.data)})
