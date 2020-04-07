import React from 'react';
import Cell from './Cell'
import findRects from './findRects'
import classes from './Cell.module.css'
import PropTypes from 'prop-types'
/*
    input: field size (3x3) is {width: 3, heght: 3}
*/
console.log('run Field');


const Field = ({cellID, size, rect, clickCounter, isFirst}) =>{
    const showEnableCells = true;
    console.log(' Field', clickCounter);
    let enableCells = {}; // ячейки, куда можно ставить квадрат
    let coveredCells = {}; // занятые ячейки
    let currentCells = {}; // текущие ячейки
    // 1st round
    if (isFirst){
        enableCells[size.height+'x'+size.width] = true;
        enableCells['1x1'] = true;
        enableCells[size.height+'x1'] = true;
        enableCells['1x'+size.width] = true;
    }

    if (rect && cellID) {
        const rectsArr = findRects(null);
        if (rectsArr.length) currentCells = rectsArr[clickCounter % rectsArr.length].squares
    }

    console.log('enableCells',enableCells);
    console.log('Field');
    if (cellID) {
        console.log(cellID);
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
            drawTable( size, showEnableCells )
        // </div>
    )

}

Field.propTypes = {
    cellID: PropTypes.string,
    size: PropTypes.object,
    rect: PropTypes.array,
    clickCounter: PropTypes.number,
    isFirst: PropTypes.bool,
}

Field.defaultProps = {
    cellID: '',
    size: {width: 15, height: 10},
    rect: [0, 0],
    clickCounter: 0,
    isFirst: true,
}
export default Field
