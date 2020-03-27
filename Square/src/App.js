import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Field from './Field/Field';
import Counter from './Counter/Counter'
import Cell from './Cell/Cell'

function App() {
  const size = {width: 2, height: 2}
  return (
    <div className="App">
      <header className="App-header">
        Square game
      </header>
      <div>
        {Counter()}
        {Field({size})}
        {Cell()}
      </div>
    </div>
  );
}

export default App;
