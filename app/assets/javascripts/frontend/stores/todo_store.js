var _todos = [];
var _callbacks = [];

var TodoStore = {
  changed: function(){
    _callbacks.forEach(function(cb){
      cb();
    });
  },
  addChangedHandler: function(cb){
    _callbacks.push(cb);
  },
  removeChangedHandler: function(cb){
    for (var i = 0; i < _callbacks.length; i++) {
      if (_callbacks[i] === cb){
        _callbacks.splice(i, 1);
        break;
      }
    }
    TodoStore.changed();
  },
  find: function(id){
    return _todos.find(function(t){
      return t.id === id;
    });
  },
  all: function () {
    return _todos.slice();
  },

  fetch: function () {
    var that = this;
    $.ajax({
       method: 'GET',
       url: 'api/todos',
       dataType: 'json',
       success: function(resp) {
         _todos = resp;
         that.changed();
       }
     });
  },
  create: function(todo){
    var that = this;
    $.ajax({
     method: 'POST',
     url: 'api/todos',
     data: {todo: todo},
     success: function(resp) {
       _todos.push(resp);
       that.changed();
     }
   });
  },
  destroy: function(id){
    var that = this;
    var idx = TodoStore.find(id);
    var todo = _todos[idx];
    if (todo) {
      $.ajax({
        method: 'DELETE',
        url: 'api/todos/' + id,
        success: function() {
          _todos.splice(idx, 1);
          that.changed();
        }
      });
    }
  },
  addStore: function(todo){
    _todos.push(todo);
    TodoStore.changed();
  },
  toggleDone: function (id) {
    var todo = TodoStore.find(id);
    $.patch("api/todos/" + id, todo, function () {
      todo.done = !todo.done;
      TodoStore.changed();
    });
  }
};

module.exports = TodoStore;
