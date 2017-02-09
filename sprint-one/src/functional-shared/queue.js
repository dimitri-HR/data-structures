var Queue = function() {
  var obj = {
    storage: {},
    front: 0,
    back: 0
  };
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
};
queueMethods.dequeue = function() {
  var qSize = this.back - this.front;
  if (qSize > 0) {
    var dequeuedItem = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return dequeuedItem;
  }
  if (qSize === 0) {
    this.front = 0;
    this.back = 0;
  }
};
queueMethods.size = function() {
  return this.back - this.front;
};
