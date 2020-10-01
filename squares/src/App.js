import React, { useState, useEffect } from 'react';
import classes from './App.module.css'
import WelcomeWindow from './components/WelcomeDisplay/WelcomeContainer'
import RoomComponent from './components/RoomDisplay/RoomComponent'
import './App.module.css'

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './store/reducers'

function App() {
  console.log('run App');

  const store = createStore( rootReducer )


  const headClasses = [classes["App-header"]];


  // const [userName, setUserName] = useState(null);
  const [welcomeDisplay, setWelcomeDisplay] = useState(false);
  

  

  // if (!welcomeDisplay) {
  //   sideClasses.push('col-lg-4')
  // }else{
  // }




    return (
      <Provider store={store}>
        <div className="App">
          <header className={headClasses.join(' ')}>
            Square game
          </header>
          { welcomeDisplay? 
            <WelcomeWindow/>
            :
            <RoomComponent /> }
        </div>
      </Provider>
  );
}

export default App;
