import React, { useState } from "react";
import "../App.css";
const Calculatee = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <div>
      <h2>Basic Calculator</h2>

      <input type="text" value={input} readOnly />
      <br />
      <div className="calculator">
        <button className="btn" onClick={() => handleButtonClick("1")}>
          1
        </button>
        <button className="btn" onClick={() => handleButtonClick("2")}>
          2
        </button>
        <button className="btn" onClick={() => handleButtonClick("3")}>
          3
        </button>
        <button className="btn" onClick={() => handleButtonClick("+")}>
          +
        </button>
        <br />
        <button className="btn" onClick={() => handleButtonClick("4")}>
          4
        </button>
        <button className="btn" onClick={() => handleButtonClick("5")}>
          5
        </button>
        <button className="btn" onClick={() => handleButtonClick("6")}>
          6
        </button>
        <button className="btn" onClick={() => handleButtonClick("-")}>
          -
        </button>
        <br />
        <button className="btn" onClick={() => handleButtonClick("7")}>
          7
        </button>
        <button className="btn" onClick={() => handleButtonClick("8")}>
          8
        </button>
        <button className="btn" onClick={() => handleButtonClick("9")}>
          9
        </button>
        <button className="btn" onClick={() => handleButtonClick("*")}>
          *
        </button>
        <br />
        <button className="btn" onClick={() => handleButtonClick("0")}>
          0
        </button>
        <button className="btn" onClick={() => handleClear()}>
          Clear
        </button>
        <button className="btn" onClick={() => handleCalculate()}>
          =
        </button>
        <button className="btn" onClick={() => handleButtonClick("/")}>
          /
        </button>
        <br />
        <p className="result">Result: {result}</p>
      </div>
    </div>
  );
};

export default Calculatee;
