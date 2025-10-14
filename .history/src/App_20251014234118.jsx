import React, { useState } from "react";
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
