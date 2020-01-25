import React from "react";
import Header from "./components/Header";
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
