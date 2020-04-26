import React, {useState} from 'react';
import classes from './Sidebar.module.css'
// import ReactDOM from 'react-dom';
import Dice from './Dise/Dise';


/*
    props: {
        player:{}
    }
*/
console.log('run PlayerMenu');
const PlayerMenu = (props)=>{
    console.log('PlayerMenu', props);
    const panelClasses = [classes.panel];
    panelClasses.push(classes['panel-player']);

    const [info, setInfo] = useState(<div id={'info'}>{'Бросайте кости!'}</div>);   
    console.log('info', info)
    return (
        <div className={panelClasses.join(' ')}>
            {console.log('rendering...')}
            <button className='btn btn-outline-secondary' onClick={()=>{setInfo(Dice())}}>Бросить кости</button>
            {info}
        </div>
    )
}
export default PlayerMenu