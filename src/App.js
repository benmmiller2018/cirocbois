import React from 'react';
import img from "./joe.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="joe"  alt="logo" />
        <h2>
          who put you on the planet
        </h2>
        
      </header>
    </div>
  );
}

export default App;
