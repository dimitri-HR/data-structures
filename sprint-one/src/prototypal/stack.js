var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.length = 0;
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  if (this.length > 0) {
    this.length--;
  }
  var popped = this.storage[this.length];
  delete this.storage[this.length];
  return popped;
};

stackMethods.size = function() {
  return this.length;
};
