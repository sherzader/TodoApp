var _todos = [];
var _callbacks = [];

var TodoStore = {
  addChangedHandler: function(){

  },
  removeChangedHandler: function(){

  },
  addStore: function(todo){
    _todos.push(todo);
    changed();
  },
  addCallback: function(){

  }
};

module.exports = TodoStore;
