const findRects = props =>{
    console.log('findRects', props)
    const positions = {
        pos1:{}, pos2:{}, pos3:{}, pos4:{}, pos5:{}, pos6:{}, pos7:{}, pos8:{}
    }
    positions.pos1 = null;
    return [
        {
            status: true, // it's possible to draw the square

            squares:{
                '1x1': true,
                '1x2': true,
                '2x1': true,
                '2x2': true,
                '3x1': true,
                '3x2': true,
            }
        },
        {
            status: true, // it's possible to draw the square
    
            squares:{
                '1x1': true,
                '1x2': true,
                '1x3': true,
                '2x1': true,
                '2x2': true,
                '2x3': true,
            }
    
        }
    ]
}

// var i = mas.length-1;
// (function() {
//     var i = mas.length-1;
//     (function ret() {
//          mas[i].classList.remove("appearanceBlock");
//          i = ++i % mas.length;
//          mas[i].classList.add("appearanceBlock");
//          window.setTimeout(ret, 3000)
//     })()
// })();



export default findRects;