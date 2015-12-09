var React = require('react'),
    TodoStore = require('../stores/todo_store.js'),
    DeleteListItem = require('../components/delete_list_item.jsx');

var TodoListItem = React.createClass({
  render: function(){
    var that = this;
    return(
      <div>
      {this.props.todos.map(function(l){
        return (
            <div><li key={l.id}>{l.title}</li>
            <DeleteListItem todo={l} />
            </div>
          );
      })}
      </div>
    );
  }
});

module.exports = TodoListItem;
