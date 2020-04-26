import React from 'react';
import Cell from './Cell'
import findRects from './findRects'
import classes from './Cell.module.css'
import PropTypes from 'prop-types'
/*
    input: field size (3x3) is {width: 3, heght: 3}
*/
console.log('run Field');

/*
    !!!!!                             НЕ ТРОГАЙ НИЧЕГО ПОКА НЕ ОПРЕДЕЛИШЬСЯ С ПРОПИСАМИ                     !!!!!
*/


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

    if (cellID) {
        console.log(cellID);
    }




    const drawTable = ({width, height}, showEnableCells)  => {
        // const result = [];
        const rows = Array.from(new Array(height));
        const cols = Array.from(new Array(width));

        const table = (
            rows.map((el, y) => {
                return (
                    <div key = {`row-${y}`} className={classes['flex-container']}>
                    {cols.map((el, x) => {
                        let id = `${y+1}x${x+1}`;
                        return (
                        <Cell 
                            key={id} 
                            id={id}
                            enable = {enableCells[id]? true: false}
                            covered = {coveredCells[id]? true: false}
                            current = {currentCells[id]? true : false}
                            showEnableCells = {showEnableCells}
                        />
                    )})}
                    </div>)
                
            })
        )
        return table

    }

    return ( drawTable(size, showEnableCells) )
    /*
    const drawTable = size  => {
        const result = [];

        for (let row = 1; row <= size.height; row++) {
            result.push (
                <div key = {row} className={classes['flex-container']}>
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
    return ( drawTable(size, showEnableCells) )
    */
    

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
