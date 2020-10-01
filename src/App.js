import React from 'react';
import img from "./joe.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo"  alt="logo" />
        <h2>
          who put you on the planet
        </h2>
        
      </header>
    </div>
  );
}

export default App;
