var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // Complexity O(1)
  list.addToTail = function(value) {
    var prevTail = list.tail;
    list.tail = Node(value);
    if (prevTail) {
      prevTail.next = list.tail;
    }
    if (!list.head) {
      list.head = list.tail;
    }
  };

  // Complexity O(1)
  list.removeHead = function() {
    var currentHead = this.head;
    if (currentHead) {
      this.head = this.head.next;
      return currentHead.value;
    }
  };

  // Complexity O(n)
  list.contains = function(target) {
    var node = this.head;
    var searchList = function(node) {
      if (node.value === target) {
        return true;
      }
      if (node.next) {
        return searchList(node.next);
      }
      return false;
    };
    return searchList(node);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
