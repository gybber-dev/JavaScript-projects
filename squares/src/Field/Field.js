import React from 'react';
import Cell from './Cell/Cell'
/*
    input: field size (3x3) is {width: 3, heght: 3}
*/
console.log('run Field');

const Field = props=>{
    const showEnableCells = true;
    let enableCells = {};
    // 1st round
    if (props.isFirst){
        enableCells[props.size.height+'x'+props.size.width] = true;
        enableCells['1x1'] = true;
        enableCells[props.size.height+'x1'] = true;
        enableCells['1x'+props.size.width] = true;
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
        const divStyle = {
            display: 'table-row'
          };
        for (let row = 1; row <= size.height; row++) {
            result.push (
                <div key = {row} style={divStyle}>
                    {drawRow(size.width, row)}
                </div>
            )            
        }
        return result;
    }
    function drawRow (width, row) {
        const result = [];
        let id;
        for (let col = 1; col <= width; col++) {
            id = row+'x'+col;
            // console.log('isIt?', id, enableCells[id])
            result.push (
                    <Cell 
                        key={id} 
                        id={id}
                        enable = {enableCells[id]? true: false}
                        showEnableCells = {showEnableCells}
                    />
            )
        }
        return result
    }
    return drawTable( props.size, showEnableCells )
}
export default Field
