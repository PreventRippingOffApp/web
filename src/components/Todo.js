import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
// toggleTodo のように再生の関数を入れる
// import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo }) => (
  <li className="todo-item" /* onClick={() => toggleTodo(todo.id)} */>
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
  </li>
);

// export default Todo;
export default connect(
  null,
  {
    // toggleTodo
  }
)(Todo);
