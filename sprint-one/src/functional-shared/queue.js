var Queue = function() {
  var obj = {
    storage: {},
    front: 0,
    back: 0
  };
  obj.enqueue = queueMethods.enqueue;
  obj.dequeue = queueMethods.dequeue;
  obj.size = queueMethods.size;

  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
};
queueMethods.dequeue = function() {
  if (this.back - this.front > 0) {
    var dequeuedItem = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return dequeuedItem;
  }
};
queueMethods.size = function() {
  return this.back - this.front;
};
