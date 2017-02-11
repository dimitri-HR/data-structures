// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!(node in this)) {
    this[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return node in this;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var edges = this[node];
  edges.forEach(el => {
    this.removeEdge(el, node);
  });
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    return this[fromNode].indexOf(toNode) !== -1;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    this[fromNode].push(toNode);
    this[toNode].push(fromNode);
  }
};


// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this[fromNode]; i++) {
    if (this[fromNode][i] === toNode) {
      this[fromNode].splice(i, 1);
    }
  }
  for (var j = 0; j < this[toNode]; j++) {
    if (this[toNode][j] === fromNode) {
      this[toNode].splice(j, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var keys = Object.keys(this);
  for (var k = 0; k < keys.length; k++) {
    cb(keys[k]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addNode - Complexity O(n) - linear
// contains - Complexity O(n) - linear
// removeNode - Complexity O(1) - constant
// hasEdge - Complexity O(n) - linear
// addEdge - Complexity O(n) - linear
// removeEdge - Complexity O(1) - constant
// forEachNode - Complexity O(n) - linear
