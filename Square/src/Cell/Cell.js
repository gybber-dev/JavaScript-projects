import React from 'react';
import CSS from './Cell.css' // долго бился. Чтобы импортировать в css в переменную, нужно https://habr.com/ru/post/335244/



const Cell = props =>{
    const style = 'cell'
    let cellClasses = CSS;
    console.log(cellClasses);
    // cellClasses.push(CSS.red);
    console.log('classes', CSS.cell)
    return (
        <div className={style}>Cell</div>
    )
}
export default Cell