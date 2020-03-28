import React, {useState} from 'react';
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
    const [info, setInfo] = useState(<div id={'info'}>{'Бросайте кости!'}</div>);   
    console.log('info', info)
    return (
        <div>   
            {console.log('rendering...')}
            <button onClick={()=>{setInfo(Dice())}}>Бросить кости</button>
            {info}
        </div>
    )
}
export default PlayerMenu