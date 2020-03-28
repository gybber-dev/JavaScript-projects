import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Field from './Field/Field';
import PlayerMenu from './PlayerMenu/PlayerMenu';
// import Counter from './Counter/Counter'
console.log('run App');

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
      <div className={'sidebar'}
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
          {PlayerMenu({
            player:{}
          })}
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
