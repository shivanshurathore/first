import React, { useState } from "react";

function App() {
  const dataArray = [
    "Jack",
    "Jill",
    "Bob",
    "Bobby",
    "Angel",
    "Anna",
    "Mary",
    "Sid",
    "Sidd",
  ];

  let [newArr, setNewArr] = useState([]);
  let [input, setInput] = useState("");

  function showDD(e) {
    let str = e.currentTarget.value;
    setInput(str);
    newArr = dataArray.filter(
      (val) => val.toLowerCase().indexOf(str.toLowerCase()) >= 0
    );
    setNewArr(newArr);
  }

  return (
    <div className="main">
      <h3>Input DropDown</h3>
      <input
        type="text"
        placeholder="Search Items"
        onChange={showDD}
        className="input"
      />
      <div className="dd">
        {input !== "" && newArr.map((val) => <div key={val}>{val}</div>)}
      </div>
    </div>
  );
}

export default App;
