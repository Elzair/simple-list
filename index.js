var node = {
    val: null
  , rest: null
};

var createNode = exports.createList = function() {
  return Object.create(node);
};

exports.first = function(list) {
  return list.val;
};

exports.rest = function() {
  return list.rest;
};
