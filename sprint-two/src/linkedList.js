var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

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

  list.removeHead = function() {
    var currentHead = list.head;
    if (currentHead) {
      list.head = list.head.next;
      return currentHead.value;
    }
  };

  list.contains = function(target) {
    var node = list.head;
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
// addToTail - Complexity O(1)
// removeHead - Complexity O(1)
// contains - Complexity O(n)
