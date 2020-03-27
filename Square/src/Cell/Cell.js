import React from 'react';
import classes from './Cell.css'


const Cell = props =>{

    const cellClasses = [classes.cell];
    cellClasses.push(classes.red);
    console.log('classes', classes.cell)
    return (
        <div className={'cell'}>Cell</div>
    )
}
export default Cell