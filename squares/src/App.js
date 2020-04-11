import React, { useState } from 'react';

import './App.css';
import Field from './Field/Field';
import Sidebar from './Sidebar/Sidebar';
// import modal from './plugins/modal/index.html'
// import Counter from './Counter/Counter'


function App() {
  console.log('run App');
  
  
  const [counter, setCounter] = useState(0);

  const [options, setOptoins] = useState({});

  const handleClick = e =>{
    setCounter( counter + 1 )
    setOptoins( Object.assign(
      options, 
        {size:{width:15, height: 10}},
        {sellID: e.target.id}, 
        {rect: [3, 2]}, 
        {clickCounter: counter}
      )
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        Square game
      </header>
      <div className='row'>
        <div className='col-lg-8 col-12' onClick={handleClick}>
          <Field 
            cellID ={options.sellID}
            rect ={options.rect}
            clickCounter ={options.clickCounter}
            isFirst ={options.isFirst}
            // size={{width:7, height:5}}
          />
        </div>
        <div className='col-lg-4 col-12'>
          <Sidebar />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
            {'bottom'}
        </div>
      </div>
    </div>
  );
}

export default App;
