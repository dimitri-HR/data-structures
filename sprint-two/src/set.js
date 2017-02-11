var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  var targetIndex = this._storage.indexOf(item);
  if (targetIndex !== -1) {
    this._storage.splice(targetIndex, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// add function:  Complexity O(n) - linear
// contains function:  Complexity O(n) - linear
// remove function: Complexity O(n) - linear
