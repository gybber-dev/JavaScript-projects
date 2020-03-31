
import React from 'react';
console.log('run Dice');


const generate = ()=>{
    console.log('generating...')
    return {d1: 2, d2:3}
}

const dice = generate();

const Dice = ()=>{
    console.log('Dice rendering...')
    return (
        <div id={'info'}>
            {`Кости брошены: ${dice.d1} и ${dice.d2}`}
        </div>
    )
}

export default Dice