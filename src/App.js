import React from "react";
import Counter from "./components/Counter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import IncreaseCounter from "./components/IncreaseCounter";
import './style.css';
const App = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "170px auto" }}>
      <header >
        This Redux Project
      </header>
      <Counter />
      <div className="buttonList">
        <IncreaseCounter />
        <DecreaseCounter />
        <IncreaseByTwoCounter />
      </div>
    </div>
  );
};

export default App;
