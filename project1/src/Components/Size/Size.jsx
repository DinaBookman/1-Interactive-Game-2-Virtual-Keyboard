import React, { createElement, useState } from 'react'
function Size(props){
function setSize(func){
    switch(func){
    case 'increase':
        {

            if (props.size < 100) {
                props.addUndo(() => { props.setsize(props.size) })
                props.setsize(parseInt(props.size) + 6)
            }
        } break;
    case 'decrease':
        {
            if (props.size > 8) {
                props.addUndo(() => { props.setsize(props.size) })
                props.setsize(parseInt(props.size) - 6)
            }
        } break;
    }
}
    

    return(<><button onClick={()=>setSize('increase')}>increase Font Size</button>
    <button onClick={()=>setSize('decrease')}>decrease Font Size</button></>)
}
export default Size;