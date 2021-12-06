import "./App.css";
import React, { useState } from "react";
import Sequencer from "./sequencer";
import patterns from "./patterns";

function App() {
  const [patternIndex, setPatternIndex] = useState(0);

  const onChangePattern = (e) => {
    setPatternIndex(e.target.selectedIndex);
  };

  return (
    <div className="App">
      <select onChange={onChangePattern}>
        {patterns.map((pattern, index) => {
          return <option key={index}>{pattern.name}</option>;
        })}
      </select>

      <Sequencer
        key={patternIndex}
        pattern={patterns[patternIndex]}
      ></Sequencer>
    </div>
  );
}

export default App;
