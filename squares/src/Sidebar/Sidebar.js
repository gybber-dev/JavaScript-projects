import React from 'react';
import classes from './Sidebar.module.css'
import PlayerMenu from './PlayerMenu';
// import GameMenu from './GameMenu'



const Sidebar = ()=>{
    const panelClasses = [classes.sidebar];
    // panelClasses.push(classes.option);

    return (
        <div className={panelClasses.join(' ')}>
            {/* <GameMenu /> */}
            <PlayerMenu />
        </div>
    )
}
export default Sidebar