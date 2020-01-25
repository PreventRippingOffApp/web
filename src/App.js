import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./styles.css";
import AddTodo from "./components/AddTodo";

export default function App() {
  return (
    <div>
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
}
