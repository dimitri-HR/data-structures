
var HashTable = function() {
  this._count = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // retrieve a bucket
  var bucket = this._storage.get(index);
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }
  var found = false;
  // iterate over bucket
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    // if key exist
    if (tuple[0] === k) {
      // update it
      tuple[1] = v;
      found = true;
      break;
    }
  }
  // if key not found
  if (!found) {
    // insert a new tuple
    bucket.push([k, v]);
    this._count++;
    if (this._count > this._limit * 0.75) {
      this._resize(this._limit * 2);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        return tuple[1];
      }
    }
  }
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
      this._count--;
      if (this._count < this._limit * 0.25) {
        this._resize(this._limit / 2);
      }
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype._resize = function(newLimit) {
  var oldStorage = this._storage;
  this._limit = newLimit;
  this._storage = LimitedArray(newLimit);
  this._count = 0;

  oldStorage.each(function(bucket) {
    if (!bucket) { return }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 // insert function - Complexity O(1) - constant
 // retrieve function - Complexity O(1) - constant
 // remove function - Complexity O(1) - constant



// ************************************************
 // Notes: Hash Table
 // limitedArray structure
 // limitedArray = {
 //  storage:
 //    [ // using hashed indexes instead of numbers 0, 1, 2...
 //      [ // bucket arr
 //        [k, v], [k, v]  // tuples arr
 //      ],
 //      [ ['cat', 'soft'], ['dog', 'bark'] ] // e.g
 //    ],
 //  get: function() {},
 //  set: function() {},
 //  each: function() {}
 // }
 // ************************************************
