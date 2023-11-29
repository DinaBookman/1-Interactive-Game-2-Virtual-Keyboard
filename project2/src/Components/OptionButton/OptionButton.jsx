import { useState } from 'react'
import React from 'react'
 
function OptionButton(props) {
    
    return( 
    <><button onClick={() => newGame()}>{'Start new Game'}</button>
            <button onClick={() => Exit()}>{'Exit'}</button></>)
}
export default OptionButton;
    