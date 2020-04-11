import React, { useState } from 'react'
import classes from './Sidebar.module.css'
import * as firebase from 'firebase'
// import Modal from '../plugins/modal/index'
console.log('run GameMenu');


const connectGame = newGame => {
    const msg = newGame? 'new game' : 'connect game';
    
    let options = {
        title: 'Заголовок окна',
        closable: true,
        content: `
        <p>Текст содержимого в формате HTML</p>
        `,
        width: '600px',
        footerButtons: [
        {text: 'OK', type: 'primary', handler(){
            console.log('Primary btn clicked!');
            // modal.close();
        }},
        {text: 'Cancel', type: 'danger', handler(){
            console.log('Danger btn clicked!')
            // modal.close();
        }},
        ]
    };
    
    // document.body.append(modal(options));
    // document.querySelector('#myModal').modal(options)
    console.log(document.body);
    return (
        <div>
            {/* <Modal /> */}
        </div>
    )
};


const GameMenu = props =>{
    const panelClasses = [classes.panel];
    const buttonClasses = []
    // add new class
    buttonClasses.push('btn');
    buttonClasses.push('btn-primary');
    panelClasses.push(classes['panel-game'])


    const [newGameBlock, setNewGameBlock] = useState('');

    const handleNewGame = ()=>{
        console.log('handleNewGame');
        const rootRef = firebase.database().ref().child('react');
        const speedRef = rootRef.child('speed');
        speedRef.once('value').then(function(snapshot) {
            console.log(snapshot.val())
            // ...
          });
        // speedRef.on('value', snap => {
        //     console.log(snap.val())
        //   })
    }

    return (
        <div className={panelClasses.join(' ')}>

            <button 
                className={buttonClasses.join(' ')} 
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={handleNewGame}>
                    New Game
            </button>

            <button 
                className={buttonClasses.join(' ')} 
                onClick={()=>{setNewGameBlock(connectGame())}}>
                    Join Game
            </button>
            <div>
                {newGameBlock}
            </div>
        
        </div>
    )
}

export default GameMenu