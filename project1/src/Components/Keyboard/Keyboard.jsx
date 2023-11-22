import React from 'react'
import Key from '../Key/Key.jsx'

function Keyboard(props){

    return(
        <div>
            <Key keyInput={props.qwerty_mapping[0]} language={props.language}></Key>
            
        </div>
    )
}
export default Keyboard