import React from 'react'
import classes from './MainMenu.module.css'
console.log('run MainMenu');

const MainMenu = props =>{
    const cellClasses = [classes.main];

    // add new class
    cellClasses.push(classes.option)

    return (
        <div className={cellClasses.join(' ')}>
            {'MainMenu'}
        </div>
    )
}


export default MainMenu