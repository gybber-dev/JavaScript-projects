import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Field from './Field/Field';
import PlayerMenu from './PlayerMenu/PlayerMenu';
import cover from './Field/cover/cover'
// import Counter from './Counter/Counter'

function App() {
  console.log('run App');
  let propObj = {
    elem: null,
    size: {width: 15, height: 10},
    rect: null,
    field: null,
    isFirst: true
  }
  // let obj = {a: 1};
  // console.log(Object.assign(obj, {a:2}))
  const [field, setField] = useState(Field(propObj));
  return (
    <div className="App">
      <header className="App-header">
        Square game
      </header>
      <div
        style={{display:'table-cell'}}
        onClick={
          (e)=>{setField( Field(Object.assign(propObj, {elem: e.target}, {rect: [3, 2]})) )}
        }
      >
        {field}
        {console.log(field)}
        {/* {Field({size})} */}
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
