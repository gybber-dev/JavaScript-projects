import React from 'react';
import Cell from './Cell/Cell'
import findRects from './findRects'
import classes from './Cell/Cell.module.css'
/*
    input: field size (3x3) is {width: 3, heght: 3}
*/
console.log('run Field');

const Field = props=>{
    const showEnableCells = true;

    let enableCells = {}; // ячейки, куда можно ставить квадрат
    let coveredCells = {}; // занятые ячейки
    let currentCells = {}; // текущие ячейки
    // 1st round
    if (props.isFirst){
        enableCells[props.size.height+'x'+props.size.width] = true;
        enableCells['1x1'] = true;
        enableCells[props.size.height+'x1'] = true;
        enableCells['1x'+props.size.width] = true;
    }

    if (props.rect && props.elem) {
        const rectsArr = findRects(props);
        if (rectsArr.length) currentCells = rectsArr[props.clickCounter % rectsArr.length].squares
    }

    console.log('enableCells',enableCells);
    console.log('Field', props);
    if (props.elem) {
        console.log(props.elem);
        console.log(props.elem.key);
        console.log(props.elem.parentNode);
    }

    // table view:
    const drawTable = size  => {
        const result = [];
        const cellClasses = [classes['flex-container']];
        
        
        for (let row = 1; row <= size.height; row++) {
            result.push (
                <div key = {row} 
                    // style={divStyle}
                    className={cellClasses.join(' ')}
                    /* className={'row-cols-'+size.width} */
                    >
                    {drawRow(size.width, row)}

                </div>
            )            
        }
        return result;
    }
    function drawRow (X, Y) {
        const result = [];
        let id;
        for (let col = 1; col <= X; col++) {
            id = Y+'x'+col;
            // console.log('isIt?', id, enableCells[id])
            result.push (
                    <Cell 
                        key={id} 
                        id={id}
                        enable = {enableCells[id]? true: false}
                        covered = {coveredCells[id]? true: false}
                        current = {currentCells[id]? true : false}
                        showEnableCells = {showEnableCells}
                    />
            )
        }
        return result
    }
    return (
        // <div className='container'>
            drawTable( props.size, showEnableCells )
        // </div>
    )

}
export default Field
