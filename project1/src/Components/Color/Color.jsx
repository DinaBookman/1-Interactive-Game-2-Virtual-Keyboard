import React, { createElement, useState } from 'react'
import { HexColorPicker } from "react-colorful";

function Color(props){
     
 const [openColor, setopenColor] = useState(false)
    function changeOpenColor() {

        if (openColor) {

            setopenColor(false)
        }

        else {
            setopenColor(true)
            props.addUndo(() => { props.setColor(props.color) })
        }
    }
    return(<>
     {openColor && <HexColorPicker color={props.color} onChange={props.setColor} />}
    <button className='key' onClick={() => { changeOpenColor() }}>change color</button></>)
}
export default Color;