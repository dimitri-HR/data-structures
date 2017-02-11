var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};

BinarySearchTree.prototype.insert = function(value) {
  var newNode = BinarySearchTree(value);

  var insertNode = function (node) {
    if (value < node.value && !node.left) {
      node.left = newNode;
    } else if (value < node.value) {
      insertNode(node.left);
    } else if (value > node.value && !node.right) {
      node.right = newNode;
    } else if (value > node.value) {
      insertNode(node.right);
    }
  };
  insertNode(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
