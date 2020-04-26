import React, { useState } from 'react'
import Field from './Field/Field';
import Sidebar from './Sidebar/Sidebar';


const MainWindow = ()=>{
    
    const [counter, setCounter] = useState(0);
    const [options, setOptoins] = useState({});
    
    const fieldClasses = ['col-12', 'col-lg-8'];
    const sideClasses = ['col-12'];
    
    const handleClick = e =>{
        setCounter( counter + 1 )
        setOptoins( Object.assign(
          options, 
            {size:{width:15, height: 10}},
            {sellID: e.target.id}, 
            {rect: [3, 2]}, 
            {clickCounter: counter}
          )
        )
      }


    return (
      <>
        <div className='row'>
            <div className={fieldClasses.join(' ')} onClick={handleClick}>
              <Field 
                cellID ={options.sellID}
                rect ={options.rect}
                clickCounter ={options.clickCounter}
                isFirst ={options.isFirst}
                // size={{width:7, height:5}}
              />
            </div>
            <div className={sideClasses.join(' ')}>
              <Sidebar />
            </div>
          </div>
        </>
    )
  }

  export default MainWindow;