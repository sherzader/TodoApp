var React = require('react'),
    TodoStore = require('../stores/todo_store.js');

var DeleteListItem = React.createClass({
  handleDestroy: function (e) {
    TodoStore.destroy(this.props.todo.id);
  },
  render: function () {
    return(
      <button key={this.props.todo.id + 1}
        onClick={this.handleDestroy}>
        Delete
      </button>
    );
  }
});

module.exports = DeleteListItem;
