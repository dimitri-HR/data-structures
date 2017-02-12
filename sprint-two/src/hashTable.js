
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    this._storage.set(index, []);
  }
  bucket = this._storage.get(index);
  bucket.push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var item;
  if (bucket) {
    bucket.forEach(el => {
      if (el[0] === k) {
        item = el[1];
      }
    });
  }
  return item;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    return null;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 // insert function - Complexity O(1) - constant
 // retrieve function - Complexity O(1) - constant
 // remove function - Complexity O(1) - constant
