import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Field from './Field/Field';
// import Counter from './Counter/Counter'


function App() {
  const size = {width: 10, height: 10}
  return (
    <div className="App">
      <header className="App-header">
        Square game
      </header>
      {/* <div>
        {Counter()}
      </div> */}
      <div
        style={{display:'table-cell'}}
        onClick={(e)=>{console.log(e.target)}}
      >
          {Field({size})}
      </div>
      <div
        style={{display:'table-cell'}}
      >
        <div
          style={{display:'table-row'}}
        >
          {'Main menu'}
        </div>
        <div
          style={{display:'table-row'}}
        >
          {'Player menu'}
        </div>
      </div>
      <div
        style={{display:'table-row'}}
      >
        {'bottom'}
      </div>
    </div>
  );
}

export default App;
