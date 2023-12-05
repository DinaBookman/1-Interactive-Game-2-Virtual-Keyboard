import React, { createElement, useState } from 'react'
function Size(){

    case 'increase Font Size':
        {

            if (props.size < 100) {
                props.addUndo(() => { props.setsize(props.size) })
                props.setsize(parseInt(props.size) + 6)
            }
        } break;
    case 'decrease Font Size':
        {
            if (props.size > 8) {
                props.addUndo(() => { props.setsize(props.size) })
                props.setsize(parseInt(props.size) - 6)
            }
        } break;

    return(<><button>increase Font Size</button><button>decrease Font Size</button></>)
}
export default Size;