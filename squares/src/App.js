import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Field from './Field/Field';
import PlayerMenu from './PlayerMenu/PlayerMenu';
import MainMenu from './Sidebar/MainMenu';
// import modal from './plugins/modal/index.html'
// import Counter from './Counter/Counter'

function App() {
  console.log('run App');
  
  let [counter, setCounter] = useState(0);

  let propObj = {
    elem: null,
    size: {width: 20, height: 10},
    rect: null,
    clickCounter: 0,
    field: null,
    isFirst: true
  }
  
  // let [propObj, setPropObj] = useState(
  //   Object.assign(propPattern, {clickCounter: ++propObj.clickCounter})
  // );

  // let obj = {a: 1};
  // console.log(Object.assign(obj, {a:2}))
  const [field, setField] = useState(Field(propObj));


  return (
    <div className="App">
      <header className="App-header">
        Square game
      </header>
      <div className='row'>
        <div className='col-lg-8 col-12'
          onClick={
            (e)=>{
              setCounter( counter + 1 )
              setField( 
                Field(Object.assign(
                  propObj, 
                  {elem: e.target}, 
                  {rect: [3, 2]}, 
                  {clickCounter: counter}
                )) 
              )
            }
          }
        >
          {field}
        </div>
        <div className='col-lg-4 col-12'
          // style={{display:'table-cell'}}
        >
          <MainMenu />
          <div
            style={{display:'table-row'}}
          >
            {PlayerMenu({
              player:{}
            })}
          </div>
        </div>
      </div>
      <div
        className='row'
      >
        <div
            className='col'
          >
            {'bottom'}
          </div>
      </div>
    </div>
  );
}

export default App;
