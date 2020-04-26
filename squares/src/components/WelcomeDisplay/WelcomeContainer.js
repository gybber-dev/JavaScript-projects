import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import WelcomeComponent from './WelcomeComponent'
import { setUserNameAction, setModalShown, setInputValue, setRoomsList } from '../../store/welcomeDisplay/actions'

import dbAPI from '../../firebaseAPI'

const WelcomeWindow = ()=>{
    const userName = useSelector (state => state.welcomeWindowReducer.userName)
    const modalShown = useSelector (state => state.welcomeWindowReducer.modalShown);
    const modalInputValue = useSelector (state => state.welcomeWindowReducer.inputValue);
    let roomsList = useSelector (state => state.welcomeWindowReducer.roomsList);
    const dispatch = useDispatch();

    const modal={
        modalShown,
        handleChange: ({target: { value }}) => {
            dispatch(setInputValue(value))
        },
        handleCancel: ()=>{dispatch(setModalShown(false))},
        handleSubmit: ()=>{
            dispatch(setUserNameAction(modalInputValue));
            dispatch(setModalShown(false))
        },
    };

    useEffect(()=>{
        const name = localStorage.getItem('userName'||[])
        dispatch(setUserNameAction(name));
        console.log('reborn userName', name);        
    }, [])

    useEffect(()=>{
        if (!userName) return;
        localStorage.setItem('userName', userName)
        dbAPI.setUser(userName)
    }, [userName])


    console.log('userName', userName)
    

    const devTool = ()=>{
        console.log('clear')
        localStorage.setItem('userName', '')
    }

    const handleNewGame = ()=>{
        if (!userName) {
            dispatch(setModalShown(true));
            return;
        };
        



        // dispatch( setUserNameAction(userName) )
    };

    const handleUpdateRoomsList = async ()=>{
        const rooms = await dbAPI.getRooms();
        console.log('rooms', Object.values(rooms));
        dispatch(setRoomsList(Object.values(rooms)))

    };

    console.log('modal Pre', modal)
    return (
        <WelcomeComponent 
            userName = {userName}
            handleNewGame={handleNewGame}
            handleUpdateRoomsList={handleUpdateRoomsList}
            modal={modal}
            roomsList ={roomsList}
                // dev
            // clear LocalStorage UserName
            devTool = {devTool}
        />
    )
}



export default  WelcomeWindow