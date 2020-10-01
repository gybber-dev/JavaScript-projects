import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import WelcomeComponent from './WelcomeComponent'
import { setUserNameAction, setModalShownUser, setModalShownRoom, setRoomNameAction, setInputValue, setRoomsList } from '../../store/welcomeDisplay/actions'

import dbAPI from '../../firebaseAPI'
import { createStore } from 'redux'

const WelcomeWindow = ()=>{
    const userName = useSelector (state => state.welcomeWindowReducer.userName);
    const roomName = useSelector (state => state.welcomeWindowReducer.roomName);
    const modalShown = useSelector (state => state.welcomeWindowReducer.modalShown);
    const roomModalShown = useSelector(state => state.welcomeWindowReducer.roomModalShown);
    const modalInputValue = useSelector (state => state.welcomeWindowReducer.inputValue);
    let roomsList = useSelector (state => state.welcomeWindowReducer.roomsList);
    const dispatch = useDispatch();

    const nameModal={
        modalShown,
        title:'Введите имя чемпиона',
        handleChange: ({target: { value }}) => {
            dispatch(setInputValue(value))
        },
        handleCancel: ()=>{dispatch(setModalShownUser(false))},
        handleSubmit: ()=>{
            dispatch(setUserNameAction(modalInputValue));
            dispatch(setModalShownUser(false))
        },
    };

    const roomModal={
        roomModalShown,
        title:'Именуй поле битвы!',
        handleChange: ({target: { value }}) => {
            dispatch(setInputValue(value))
        },
        handleCancel: ()=>{dispatch(setModalShownRoom(false))},
        handleSubmit: ()=>{
            console.log('имя...............', modalInputValue)
            dispatch(setRoomNameAction(modalInputValue));
            
            dispatch(setModalShownRoom(false))
            createRoom(modalInputValue)
        },

    }

    useEffect(()=>{
        // init
        const name = localStorage.getItem('userName'||[])
        dispatch(setUserNameAction(name));
        console.log('reborn userName', name);  
        detectUserName(name);
        loadRoomsList()
    }, [])

    useEffect(()=>{
        if (!userName) return;
        localStorage.setItem('userName', userName)
        dbAPI.setUser(userName)
    }, [userName])

   

    const devTool = ()=>{
        console.log('clear')
        localStorage.setItem('userName', '')
    }

    const detectUserName = userName =>{
        if (!userName) {
            dispatch(setModalShownUser(true));
            return;
        };
    };

    const createRoom = (roomName)=>{
        console.log('creating', roomName)
        if (!roomName) {
            dispatch(setModalShownRoom(true))
        }else{
            const room = {
                name: roomName||'defaultRoom0',
                users: [ ],
                status: 'waiting...',
            }
            dbAPI.setRoom(room)
        }

    }

    const loadRoomsList = async ()=>{
        const rooms = Object.values( await dbAPI.getRooms()||{} );
        // if (!rooms.length) createRoom('defaultRoom0')
        console.log('rooms', rooms );
        dispatch(setRoomsList( rooms ))
    };

    const handleNewGame = ()=>{
        detectUserName(userName);

        createRoom(roomName);
        



        // dispatch( setUserNameAction(userName) )
    };

    const handleUpdateRoomsList = ()=>{
        loadRoomsList()
    }

    const handleJoinGame = roomName =>{
        console.log('roomName', roomName);
        
    }

    return (
        <WelcomeComponent 
            userName = {userName}
            handleNewGame={handleNewGame}
            handleUpdateRoomsList={handleUpdateRoomsList}
            nameModal={nameModal}
            roomModal={roomModal}
            roomsList ={roomsList}
            handleJoinGame={handleJoinGame}
                // dev
            // clear LocalStorage UserName
            devTool = {devTool}
        />
    )
}



export default  WelcomeWindow