import React, { useState, useEffect } from 'react';
import classes from './App.module.css'
import Field from './Field/Field';
import Sidebar from './Sidebar/Sidebar';
import WelcomeWindow from './WelcomeWindow'
import './App.module.css'
// import Modal from'./plugins/modal/Modal';

function App() {
  console.log('run App');
  const headClasses = [classes["App-header"]];
  const fieldClasses = ['col-12', 'col-lg-8'];
  const sideClasses = ['col-12'];


  const [counter, setCounter] = useState(0);
  const [options, setOptoins] = useState({});
  const [userName, setUserName] = useState(null);
  const [welcomeDisplay, setWelcomeDisplay] = useState(false);
  

  

  if (!welcomeDisplay) {
    
  }else{
    sideClasses.push('col-lg-4')
  }

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


  const MainWindow = ()=>{
    return (
      <>
        <div className='row'>
            <div className={fieldClasses.join(' ')} onClick={handleClick}>
              <Field 
                cellID ={options.sellID}
                rect ={options.rect}
                clickCounter ={options.clickCounter}
                isFirst ={options.isFirst}
                // size={{width:7, height:5}}
              />
            </div>
            <div className={sideClasses.join(' ')}>
              <Sidebar />
            </div>
          </div>
        </>
    )
  }

  return (
    <div className="App">
      <header className={headClasses.join(' ')}>
        Square game
      </header>
      {welcomeDisplay? (
        
        <MainWindow />
      ):(
        <div>
          <WelcomeWindow 
            className ={fieldClasses.join(' ')}
            userName = {userName}
          />
        </div>
      )}
    </div>
  );
}

export default App;
