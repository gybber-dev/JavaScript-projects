import React, {useState} from 'react';

const Counter = ()=>{
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}>
                Click me!
            </button>
            <p>Вы кликнули {count} раз</p>
        </div>
    )

}
export default Counter
