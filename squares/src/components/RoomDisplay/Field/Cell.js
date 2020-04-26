import React from 'react';
import classes from './Cell.module.css' // just add '.module' in .css-file name
console.log('run Cell');

const Cell = props =>{
    // console.log('Cell', props)
    
    const cellClasses = [classes.cell, 'border'];
    
    if (props.enable && props.showEnableCells) cellClasses.push('border-warning')
    if (props.current) cellClasses.push(classes.current)
    // cellClasses.push(classes);

    // console.log('join', cellClasses.join(' '))
    
    
    return (
        <div key={props} id={props.id} className={cellClasses.join(' ')} />
    )
}
export default Cell