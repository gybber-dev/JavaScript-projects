import React from 'react'
import classes from '../../App.module.css'
import Modal from '../../plugins/modal/Modal'
import PropTypes from 'prop-types';


// import { useDispatch } from 'react-redux';
// import * as firebase from 'firebase'


import dbAPI from '../../firebaseAPI'


console.log('run welcomeWindow');

const WelcomeComponent = ({userName, handleNewGame, nameModal, roomModal, roomsList, handleUpdateRoomsList, handleJoinGame, devTool}) =>{

    // const handleTest = async ()=>{
    //     let rooms = await dbAPI.read()
    //     console.log('rooms', rooms)
    // }   
    
    console.log('modal', nameModal)
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
                title={nameModal.title}
                isOpen={nameModal.modalShown}
                onCancel={nameModal.handleCancel}
                onSubmit={nameModal.handleSubmit}
            >
                <div className="form-inline" style={{justifyContent: 'center'}}>
                    <input type="text" className="form-control" placeholder="Enter your name" onChange={nameModal.handleChange} />
                </div>
            </Modal>

            <Modal
                title={roomModal.title}
                isOpen={roomModal.roomModalShown}
                onCancel={roomModal.handleCancel}
                onSubmit={roomModal.handleSubmit}
            >
                <div className="form-inline" style={{justifyContent: 'center'}}>
                    <input type="text" className="form-control" placeholder="Enter your name" onChange={nameModal.handleChange} />
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
        // console.log(userName)
        handleNewGame()
        // setUserNameAction('test')
    }

    const onUpdate = ()=>{
        console.log('roomsList', roomsList);
        handleUpdateRoomsList();
        // setUserNameAction('test')
    }

    const onRoomsClick =({ target })=>{
        let selectedRoom = target.parentElement.id;
        if (!selectedRoom) return;
        handleJoinGame(selectedRoom)
    };


    const Rooms = ()=>roomsList.map((room, index)=>{
        return (
            <tr key={`room-${index}`} id={`room${index}`}>
                <th scope="row">{index+1}</th>
                <td>{room.name}</td>
                <td>{room.users?room.users.length:0}</td>
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
                <tbody onClick={onRoomsClick}>
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
    nameModal: PropTypes.object,
    roomModal:  PropTypes.object,
}

WelcomeComponent.defaultProps = {
    userName: '',
    handleNewGame: ()=>{console.log('new game')},
    handleUpdateRoomsList: ()=>{console.log('update rooms list')},
    handleJoinGame: ()=>{console.log('join game')},
    nameModal: {
        title: 'UserName title',
        isOpen: false,
        handleSubmit: ()=>{console.log('nameModal submit')},
        handleCancel: ()=>{console.log('nameModal cancel')},
        handleChange: ()=>{console.log('nameModal change')},
    },
    roomModal: {
        title: 'RoomName title',
        isOpen: false,
        handleSubmit: ()=>{console.log('roomModal submit')},
        handleCancel: ()=>{console.log('roomModal cancel')},
        handleChange: ()=>{console.log('roomModal change')},
    },
    roomsList: [{
        name: 'there are no rooms yet',
        users: [],
        status: 'waiting...',
    }]
}


export default WelcomeComponent