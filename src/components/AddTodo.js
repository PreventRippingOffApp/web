import React from "react";
import { connect } from "react-redux";
import { addTodo, getData } from "../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", data: [] };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  handleGetData = () => {
    this.props.getData();
    console.log(this)
    // this.setState({ input: "" });
  };



  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
        <button className="add-todo" onClick={this.handleGetData}>
          Add data
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo, getData }
)(AddTodo);
// export default AddTodo;
