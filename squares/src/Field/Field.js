import React from 'react';
import Cell from './Cell/Cell'
/*
    input: field size (3x3) is {width: 3, heght: 3}
*/
console.log('run Field');

const Field = props=>{
    console.log('Field', props);
    if (props.elem) props.size.width = 5;
    // table view:
    const drawTable = size => {
        const result = [];
        const divStyle = {
            display: 'table-cell'
          };
        for (let i = 0; i < size.width; i++) {
            result.push (
                <div key = {i} style={divStyle}>
                    {drawCol(size.height)}
                </div>
            )            
        }
        return result;
    }
    const drawCol = height => {
        const result = [];
        for (let i = 1; i <= height; i++) {
            result.push (
                <div key = {i}>
                    {Cell()}
                </div>
            )
        }
        return result
    }
    return drawTable( props.size )

    // block view:
    // const drawTable = size => {
    //     const result = [];
    //     for (let index = 0; index < size.height; index++) {
    //         result.push ( drawRaw(index, size.width) )
    //         result.push ( <br key={ index*size.width+size.width+1 }/> )            
    //     }
    //     return result;
    // }
    // const drawRaw = (row, width) => {
    //     const result = [];
    //     for (let i = 1; i <= width; i++) {
    //         result.push( Cell( row*(width+1)+i) )
    //     }
    //     return result
    // }

    // return drawTable(props.size)

}
export default Field
