import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="app" style={{ backgroundColor: color || "#f0f8ff" }}>
      <div className="card">
        <h1 className="title">🎨 Magic Background Changer 🌈</h1>
        <p className="subtitle">Type any color name or HEX code below 👇</p>

        <input
          type="text"
          value={color}
          onChange={handleChange}
          placeholder="Try 'skyblue' or '#ff66cc'"
          className="color-input"
        />

        <p className="preview">
          Current Color:{" "}
          <span style={{ color: color || "#333" }}>
            {color || "Default (#f0f8ff)"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
