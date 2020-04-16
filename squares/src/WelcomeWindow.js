import React, { useState, useEffect } from 'react'
import classes from './App.module.css'
import Modal from './plugins/modal/Modal'
import PropTypes from 'prop-types';
// import * as firebase from 'firebase'
import dbAPI from './firebaseAPI'


console.log('run welcomeWindow');

const GamesList = ()=>{
    return (
        <div>List</div>
    )
}


const WelcomeWindow = ({currentUserName}) =>{
    const [showModal, setShowModal] = useState(false);
    const [userName, setUserName] = useState(currentUserName);
    const [inputName, setInputName] = useState(''); // для сохранения строки ввода имени в переменную

    useEffect(()=>{
        console.log('effect userName', userName);
        if (!userName) return;
        localStorage.setItem('userName', userName)
        dbAPI.userInit(userName)
    }, [userName])

    useEffect(()=>{
        const name = localStorage.getItem('userName'||[])
        console.log('reborn userName', name);
        // for clear localStorage activate below strings and run App TWICE:
        // localStorage.setItem('userName', '')
        setUserName(name)
    }, [])
    const buttonClasses = []
    // add new class
    buttonClasses.push('btn');
    buttonClasses.push('btn-primary');


    const handleNewGame = ()=>{
        if (!userName) setShowModal(true)
    }

    const handleSubmit = () => {
        console.log('Submit function!', userName);
        setUserName(inputName)
        setShowModal(false)
    }
    
    const handleCancel = () => {
    console.log('Cancel function!');
    setShowModal(false)
    }

    const handleChange = ({target: { value }}) => {
        setInputName(value)
    }
    
    return (
        <div className={classes['App-body']} style={{textAlign: 'center'}}>
            
            <div>{userName + (userName? '! ': '') + `Приветствую Вас на игре 'Квадраты'`}</div>
            <GamesList games={'! put list form FB here'}/>
            <button 
                className={buttonClasses.join(' ')} 
                onClick={handleNewGame}>
                    New Game
            </button>

            <button 
                className={buttonClasses.join(' ')} 
                onClick={handleNewGame}>
                    Join Game
            </button>
            <Modal
                title="Test Dialog window"
                isOpen={showModal}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
            >
                <div className="form-inline" style={{justifyContent: 'center'}}>
                    <input type="text" className="form-control" placeholder="Enter your name" onChange={handleChange} />
                </div>
            </Modal>
        </div>
    )
}

WelcomeWindow.propTypes = {
    currentUserName: PropTypes.string,
}

WelcomeWindow.defaultProps = {
    currentUserName: '',
}


export default WelcomeWindow