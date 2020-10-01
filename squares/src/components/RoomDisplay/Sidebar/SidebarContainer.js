import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import classes from './Sidebar.module.css'
import PlayerMenu from './PlayerMenu';
import GameMenu from './GameMenu'
// import GameMenu from './GameMenu'



const Sidebar = ()=>{
    const userName = useSelector (state => state.welcomeWindowReducer.userName);
    const roomName = useSelector (state => state.welcomeWindowReducer.roomName);


    // connect this:
    const playerList = [];
    const isBegan = true;

    const onNewGame = ()=>{
        alert('new game')
    };



    return (
        <div>
            <PlayerMenu 
                userName = {userName}
                roomName = {roomName}
                playerList = {playerList}

            />
            {console.log('test', useSelector(state=>state.welcomeWindowReducer))}
            {isBegan?
                <GameMenu />
                :
                <button className='btn btn-outline-secondary' onClick={onNewGame}>Новая игра</button>
            }
        </div>
    )
}
export default Sidebar