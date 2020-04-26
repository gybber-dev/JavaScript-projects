import React from 'react'
import classes from '../../App.module.css'
import Modal from '../../plugins/modal/Modal'
import PropTypes from 'prop-types';


// import { useDispatch } from 'react-redux';
// import * as firebase from 'firebase'


import dbAPI from '../../firebaseAPI'


console.log('run welcomeWindow');

const WelcomeComponent = ({userName, handleNewGame, modal, roomsList, handleUpdateRoomsList, handleJoinGame, devTool}) =>{

    // const handleTest = async ()=>{
    //     let rooms = await dbAPI.read()
    //     console.log('rooms', rooms)
    // }   
    
    console.log('modal', modal)
    return (
        <div className={classes['App-body', 'container']} style={{textAlign: 'center'}}>
            
            <h1 className='display-4'>{userName + (userName? '! ': '') + `Приветствую Вас в игре 'Квадраты'`}</h1>
            <GamesList 
                roomsList={roomsList}
                handleNewGame={handleNewGame}
                handleJoinGame={handleJoinGame}
                userName={userName}
                handleUpdateRoomsList={handleUpdateRoomsList}
                
                // dev
                devTool={devTool}
            />

            <Modal
                title="Test Dialog window"
                isOpen={modal.modalShown}
                onCancel={modal.handleCancel}
                onSubmit={modal.handleSubmit}
            >
                <div className="form-inline" style={{justifyContent: 'center'}}>
                    <input type="text" className="form-control" placeholder="Enter your name" onChange={modal.handleChange} />
                </div>
            </Modal>
        </div>
    )
};

const GamesList = ({roomsList, handleNewGame, handleUpdateRoomsList, handleJoinGame, userName, devTool})=>{
    
    console.log('roomsList', roomsList)

    const buttonClasses = []
    // add new class
    buttonClasses.push('btn');
    buttonClasses.push('btn-primary');

   
    const onNewGame = ()=>{
        console.log(userName)
        handleNewGame()
        // setUserNameAction('test')
    }

    const onUpdate = ()=>{
        console.log('roomsList', roomsList);
        handleUpdateRoomsList();
        // setUserNameAction('test')
    }

    const Rooms = ()=>roomsList.map((room, index)=>{
        return (
            <tr key={`room-${index}`} >
                <th scope="row">{index}</th>
                <td>{room.name}</td>
                <td>{room.users.length}</td>
                <td>{room.status||'waiting...'}</td>
            </tr>
        )
    });
    return (
        <div className={'jumbotron'}>
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
            <button 
                className={buttonClasses.join(' ')} 
                onClick={onNewGame}
            >
                    New Game
            </button>

            <button 
                className={buttonClasses.join(' ')} 
                onClick={onUpdate}>
                    Update
            </button>

            <button
                onClick={devTool}
            >devTool</button>
        </div>
    )
}
WelcomeComponent.propTypes = {
    userName: PropTypes.string,
    roomsList: PropTypes.array,
    handleNewGame: PropTypes.func,
    handleUpdateRoomsList: PropTypes.func,
    handleJoinGame: PropTypes.func,
    modal: PropTypes.object,
}

WelcomeComponent.defaultProps = {
    userName: '',
    handleNewGame: ()=>{console.log('new game')},
    handleUpdateRoomsList: ()=>{console.log('update rooms list')},
    handleJoinGame: ()=>{console.log('join game')},
    modal: {
        isOpen: false,
        handleSubmit: ()=>{console.log('modal submit')},
        handleCancel: ()=>{console.log('modal cancel')},
        handleChange: ()=>{console.log('modal change')},
    },
    roomsList: [{
        name: 'there are no rooms yet',
        users: [],
        status: 'waiting...',
    }]
}


export default WelcomeComponent