import React from 'react'
import Key from './Key/Key.jsx'

function Keyboard(props){

    return(
        <div>
            <Key props={props.qwerty_mapping[0]}></Key>
        </div>
    )
}
export default Keyboard