import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>Counter</h1>
      <div style={{ fontSize: '50px', margin: '20px' }}>{count}</div>
      <div>
        <button onClick={decrease} style={{ fontSize: '20px', padding: '10px 20px', margin: '5px' }}>-</button>
        <button onClick={reset} style={{ fontSize: '20px', padding: '10px 20px', margin: '5px' }}>Reset</button>
        <button onClick={increase} style={{ fontSize: '20px', padding: '10px 20px', margin: '5px' }}>+</button>
=======
import React, {useState} from "react";
        import "./App.css";

        function App() {
  const [btn1Color, setBtn1Color] = useState("blue");
        const [btn2Color, setBtn2Color] = useState("green");

  const handleClick1 = () => {
          setBtn1Color(btn1Color === "blue" ? "red" : "blue");
  };

  const handleClick2 = () => {
          setBtn2Color(btn2Color === "green" ? "orange" : "green");
  };

        return (
        <div className="app-container">
          <h1>Color Changing Buttons 🎨</h1>
          <div className="button-group">
            <button
              onClick={handleClick1}
              style={{ backgroundColor: btn1Color }}
            >
              Button 1
            </button>
            <button
              onClick={handleClick2}
              style={{ backgroundColor: btn2Color }}
            >
              Button 2
            </button>
          </div>
        </div>
  );
}
