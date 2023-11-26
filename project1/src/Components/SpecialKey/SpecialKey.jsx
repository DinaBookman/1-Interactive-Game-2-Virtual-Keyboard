import React, { createElement, useState } from 'react'
function SpecialKey(props)
{
    function setOutput(type)
    {
        if(type==="Delete")
             props.setoutput(props.output.slice(0,-1))
        else if(type==="Space")
            props.setoutput(props.output+" ")
        else  if(type==="EnterLine")
             props.setoutput(props.output+'\n')
        else if(type==="Red")
            props.setColor('Red')
     
    }
    return( <>
        <button onClick={() => setOutput(props.type)}>{props.type}</button>
    </>)
}
export default SpecialKey;