<<<<<<< HEAD
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
            </button>import React, {useState} from "react";
            import "./App.css";

            function App() {
  const [bgColor, setBgColor] = useState("#ffffff");

            const colors = ["#f87171", "#60a5fa", "#34d399", "#fbbf24", "#a78bfa", "#f472b6"];

  const changeBackground = (color) => {
              setBgColor(color);
  };

            return (
            <div className="app" style={{ backgroundColor: bgColor }}>
              <h1 className="title">🎨 Background Changer App</h1>
              <div className="button-container">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className="color-btn"
                    style={{ backgroundColor: color }}
                    onClick={() => changeBackground(color)}
                  ></button>
                ))}
              </div>
              <button className="reset-btn" onClick={() => setBgColor("#ffffff")}>
                Reset
              </button>
            </div>
            );
}

            export default App;

          </div>
        </div>
  );
}
