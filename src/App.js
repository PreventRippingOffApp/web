import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./styles.css";
import BottakuriVoiceCardList from "./components/BottakuriVoiceCardList";


export default function App() {
  return (
    <div>
      <Header />
      {/* <InclementalSearch /> */}
      <BottakuriVoiceCardList />
      {/* <TodoList /> */}
    </div>
  );
}
