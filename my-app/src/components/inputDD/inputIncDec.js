import React, { useState } from "react";

function App() {
  let [val, setVal] = useState(0);

  function changeValue(e) {
    console.log(e.key);
    if (!isNaN(e.target.value)) {
      setVal(
        e.key === "ArrowUp"
          ? ++val
          : e.key === "ArrowDown"
          ? --val
          : e.target.value
      );
    }
  }

  return (
    <div>
      <h3>Input Increment/Decrement</h3>
      <input
        type="text"
        placeholder="Press UP/Down Arrow Key"
        onChange={changeValue}
        onKeyUp={changeValue}
        value={val}
      />
    </div>
  );
}

export default App;
