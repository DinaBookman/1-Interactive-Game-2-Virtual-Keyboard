import React from 'react'
import Key from '../Key/Key.jsx'

function Keyboard(props){

    return(
        <div>
            <Key keyInput={props.qwerty_mapping[0]} language={props.language}></Key>
            <Key keyInput={props.qwerty_mapping[1]} language={props.language}></Key>
            <Key keyInput={props.qwerty_mapping[2]} language={props.language}></Key>
            <Key keyInput={props.qwerty_mapping[3]} language={props.language}></Key>
            <Key keyInput={props.qwerty_mapping[4]} language={props.language}></Key>
            <Key keyInput={props.qwerty_mapping[5]} language={props.language}></Key>
            <Key keyInput={props.qwerty_mapping[6]} language={props.language}></Key>
            <Key keyInput={props.qwerty_mapping[7]} language={props.language}></Key>
            <Key keyInput={props.qwerty_mapping[8]} language={props.language}></Key>
            <Key keyInput={props.qwerty_mapping[9]} language={props.language}></Key>
            <Key keyInput={props.qwerty_mapping[10]} language={props.language}></Key>
            <Key keyInput={props.qwerty_mapping[11]} language={props.language}></Key>
            <Key keyInput={props.qwerty_mapping[12]} language={props.language}></Key>
            <Key keyInput={props.qwerty_mapping[13]} language={props.language}></Key>
            <Key keyInput={props.qwerty_mapping[14]} language={props.language}></Key>
            <Key keyInput={props.qwerty_mapping[15]} language={props.language}></Key>
            <Key keyInput={props.qwerty_mapping[16]} language={props.language}></Key>
            <Key keyInput={props.qwerty_mapping[17]} language={props.language}></Key>
            <Key keyInput={props.qwerty_mapping[18]} language={props.language}></Key>

        </div>
    )
}
export default Keyboard