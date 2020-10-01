import React, {useState} from 'react';
import classes from './Sidebar.module.css'
// import ReactDOM from 'react-dom';
import Dice from './Dise/Dise';
import PropTypes from 'prop-types';

console.log('run GameMenu');
const GameMenu = ({isBegan})=>{
    const panelClasses = [classes.panel];
    panelClasses.push(classes['panel-player']);

    const [info, setInfo] = useState(<div id={'info'}>{'Бросайте кости!'}</div>);   


    return (
        <div className={panelClasses.join(' ')}>
            
            <button className='btn btn-outline-secondary' onClick={()=>{setInfo(Dice())}}>Бросить кости</button>
            {info}
        </div>
    )
}

GameMenu.propTypes = {
    
}

GameMenu.defaultProps = {

}
export default GameMenu