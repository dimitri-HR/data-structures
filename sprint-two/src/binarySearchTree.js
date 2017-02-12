var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};

BinarySearchTree.prototype.insert = function(value) {
  var newNode = BinarySearchTree(value);

  var insertNode = function(node) {
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

BinarySearchTree.prototype.contains = function(target) {
  var result = false;
  if (this.value === target) {
    result = true;
  } else if (this.left === null && this.right === null) {
    return result;
  } else if (target < this.value) {
    if (this.left === target) {
      result = true;
    } else {
      return this.left.contains(target);
    }
  } else if (target > this.value) {
    if (this.right === target) {
      result = true;
    } else {
      return this.right.contains(target);
    }
  }
  return result;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left === null && this.right === null) {
    return;
  } else {
    if (this.left === null) {
      this.right.depthFirstLog(cb);
    } else if (this.right === null) {
      this.left.depthFirstLog(cb);
    } else {
      this.left.depthFirstLog(cb);
      this.right.depthFirstLog(cb);
    }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
 // insert - Complexity O(log n) - logarithmic
 // contains - Complexity O(log n) - logarithmic
 // depthFirstLog - Complexity O(n) - linear
