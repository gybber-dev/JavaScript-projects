import React, { useState } from 'react'
import classes from './MainMenu.module.css'

// import Modal from '../plugins/modal/index'
console.log('run MainMenu');


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


const MainMenu = props =>{
    const panelClasses = [classes.main];
    const buttonClasses = []
    // add new class
    panelClasses.push(classes.option);
    buttonClasses.push('btn');
    buttonClasses.push('btn-primary');


    const [newGameBlock, setNewGameBlock] = useState('');

    return (
        <div className={panelClasses.join(' ')}>

            <button 
                className={buttonClasses.join(' ')} 
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={()=>{setNewGameBlock(connectGame(true))}}>
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


export default MainMenu