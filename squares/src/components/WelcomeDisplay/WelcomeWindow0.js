import React, { useState, useEffect } from 'react'
import classes from '../App.module.css'
import Modal from '../../plugins/modal/Modal'
import PropTypes from 'prop-types';
// import * as firebase from 'firebase'
import dbAPI from '../../firebaseAPI'


console.log('run welcomeWindow');

const GamesList = ({roomsList})=>{
    
    console.log('roomsList', roomsList)
    const Rooms = ()=>roomsList.map((room, index)=>{
        return (
            <tr key={`room-${index}`} >
                <th scope="row">{index}</th>
                <td>{room.name}</td>
                <td>{room.users.length}</td>
                <td>{room.status? 'started' : 'waiting...'}</td>
            </tr>
        )
    });

    return (
        <table className="table table-hover table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Комната</th>
                <th scope="col">Игроков</th>
                <th scope="col">Статус</th>
                </tr>
            </thead>
            <tbody>
                <Rooms />
            </tbody>
        </table>
    )
}


const WelcomeWindow = ({currentUserName}) =>{
    const [showModal, setShowModal] = useState(false);
    const [userName, setUserName] = useState(currentUserName);
    const [inputName, setInputName] = useState(''); // для сохранения строки ввода имени в переменную
    const [roomsList, setRoomsList] = useState([])
    
    // useEffect(()=>{
    //     console.log('effect userName', userName);
    //     if (!userName) return;
    //     localStorage.setItem('userName', userName)
    //     dbAPI.setUser(userName)
    // }, [userName])

    // useEffect(()=>{
    //     const name = localStorage.getItem('userName'||[])
    //     console.log('reborn userName', name);
    //     // for clear localStorage activate below strings and run App TWICE:
    //     // localStorage.setItem('userName', '')
    //     setUserName(name)
    // }, [])


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

    const handleTest = async ()=>{
        let rooms = await dbAPI.read()
        console.log('rooms', rooms)
    }    
    return (
        <div className={classes['App-body', 'container']} style={{textAlign: 'center'}}>
            
            <h1 className='display-4'>{userName + (userName? '! ': '') + `Приветствую Вас в игре 'Квадраты'`}</h1>
            <GamesList roomsList={roomsList}/>
            <button 
                className={buttonClasses.join(' ')} 
                onClick={handleNewGame}>
                    New Game
            </button>

            <button 
                className={buttonClasses.join(' ')} 
                onClick={handleTest}>
                    Update
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