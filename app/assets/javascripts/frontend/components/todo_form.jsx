var React = require('react'),
    TodoStore = require('../stores/todo_store.js');

var TodoForm = React.createClass({
  getInitialState: function () {
    return {title: "", body: ""};
  },
  updateBody: function (e) {
    this.setState({body: e.target.value});
  },
  updateTitle: function (e) {
    this.setState({title: e.target.value});
  },
  handleSubmit: function (e) {
    e.preventDefault;
    TodoStore.create({title: this.state.title, body: this.state.body});
    this.setState({title: "", body: ""});
  },
  render: function () {
    return(
      <form onSubmit={this.handleSubmit}>
       <div className="form-group">
         <input
           ref="title"
           className="form-control"
           value={this.state.title}
           placeholder="buy milk"
           onChange={this.updateTitle}/>
       </div>
       <div className="form-group">
         <textarea
           ref="body"
           cols='20'
           className="form-control"
           value={this.state.body}
           rows='5'
           onChange={this.updateBody}></textarea>
       </div>
       <button className="submit-todo btn btn-primary">Create Todo!</button>
      </form>
    );
  }
});

module.exports = TodoForm;
