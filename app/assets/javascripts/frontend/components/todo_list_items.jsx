var React = require('react');

var TodoListItem = React.createClass({
  render: function(){
    return(
      <div>
      {this.props.todos.map(function(l){
        return (<li key = {l.id}>{l.title}</li>);
      })}
      </div>
    );
  }
});

module.exports = TodoListItem;
