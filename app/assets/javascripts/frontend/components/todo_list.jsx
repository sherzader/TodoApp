var React = require('react'),
    TodoStore = require('../stores/todo_store.js'),
    TodoListItem = require('./todo_list_items.jsx'),
    TodoForm = require('./todo_form.jsx');

var TodoList = React.createClass({
  getInitialState: function(){
    return { todos: TodoStore.all() };
  },
  componentDidMount: function () {
    var cb = this.todosChanged;
    TodoStore.addChangedHandler(cb);
    TodoStore.fetch();
  },
  componentWillUnmount: function() {
    TodoStore.removeChangeHandler(this.todosChanged);
  },
  todosChanged: function () {
    this.setState({ todos: TodoStore.all()});
  },
  render: function () {
    return(
      <div>
        <TodoListItem todos={this.state.todos} />
        <TodoForm/>
      </div>
    );
  }
});


module.exports = TodoList;
