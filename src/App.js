import React from "react";
import InputBlock from "./components/InputBlock";
import AnswerBlock from "./components/AnswerBlock";

import "./App.css";

function App() {
  return (
    <div className="App">
      <InputBlock index={0}></InputBlock>
      <InputBlock index={1}></InputBlock>
      <InputBlock index={2}></InputBlock>
      <AnswerBlock/>
    </div>
  );
}

export default App;
