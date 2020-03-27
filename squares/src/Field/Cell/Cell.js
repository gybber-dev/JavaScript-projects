import React from 'react';
import classes from './Cell.module.css' // just add '.module' in .css-file name


const Cell = id =>{
    console.log('Cell', id)

    const cellClasses = [classes.cell];
    
    cellClasses.push(classes.red);

    
    
    
    return (
        <div key={id} className={classes.cell} />
    )
}
export default Cell