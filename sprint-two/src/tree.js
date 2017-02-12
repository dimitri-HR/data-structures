var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  if (value) {
    var node = Tree(value);
    this.children.push(node);
  }
};

treeMethods.contains = function(target) {
  var searchTree = function (branch, result) {
    result = result || false;
    if (branch.value === target) {
      result = true;
    }
    var children = branch.children;
    if (children.length) {
      for (var i = 0; i < children.length; i++) {
        result = searchTree(children[i], result);
      }
    }
    return result;
  };
  return searchTree(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// addChild - Complexity O(1) - constant
// contains - Complexity O(n) - linear
