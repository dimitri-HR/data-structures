var Stack = function() {
  var obj = {
    storage: {},
    length: 0
  };
  _.extend(obj, stackMethods);

  return obj;
};

var stackMethods = {};
stackMethods.push = function (value) {
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
