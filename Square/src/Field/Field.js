import React from 'react';

const Field = props=>{
    console.log(props.size.width);
    // let 
    // for (let i = 1; i <= props.size.height; i++) {
    //     const element = array[i];
        
    // }
    let row = [1, 2].map((item, index)=>{
        return (
            <td key= {index}>
                {item}
            </td>
        )
    });
    console.log(row)
    // const MyComponent = props =>
    // <tr>
    //     <For each="item" in={props.size.width}>
    //         <td key={item.id}>
    //             {item.text}
    //         </td>
    //     </For>
    // </tr>
    // for (let i = 1; i<=props.size.width; i++){
    //     row = <div>i</div>;
    // }
    return (
        <table>
            <tbody>
                <tr>
                    {row}
                </tr>
            </tbody>
        </table>
    )

}
export default Field
