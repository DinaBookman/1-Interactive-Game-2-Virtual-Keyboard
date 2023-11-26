import React, { useState } from 'react'
function Style(props)
{

     
    return( <>
        <button onClick={() => setOutput(props.type)}>{props.type}</button>
    </>)
}
export default Style;