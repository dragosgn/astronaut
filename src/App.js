import React from "react";
import astronaut from "./astronaut.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={astronaut} className="App-logo" alt="logo" />
        <p>Spaceflight is always tricky :)</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by React
        </a>
      </header>
    </div>
  );
}

export default App;
