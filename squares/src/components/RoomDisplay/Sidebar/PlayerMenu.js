import React from 'react'
import classes from './Sidebar.module.css';
import PropTypes from 'prop-types';


console.log('run MainMenu');

const PlayerMenu = ({userName, roomName, playerList}) =>{
    const cellClasses = [classes.main];

    // add new class
    cellClasses.push(classes.option)
    const PlayerList = playerList.map((player, index)=>{
        return <li key={player+index}>{player}</li>
    })
        return (
        <div className={cellClasses.join(' ')}>
            <div>
                <p textAlign='center'>{userName}</p>
                <p>Room name: {roomName}</p>
                <div>Players: {PlayerList}
                    
                </div>
            </div>
        </div>
    )
}


PlayerMenu.propTypes = {
    userName: PropTypes.string,
    roomName: PropTypes.string,
    playerList: PropTypes.array,
}

PlayerMenu.defaultProps = {
    userName: '...name',
    roomName: '...roomName',
    playerList: ['user0', 'user1'],
}


export default PlayerMenu