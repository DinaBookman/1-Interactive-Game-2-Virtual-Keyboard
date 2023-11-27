import React, { createElement, useState } from 'react'
function SpecialKey(props) {
    function setOutput(type) {
        if (type === "Delete")
            props.setoutput(props.output.slice(0, -1))
        else if (type === "Space")
            props.setoutput(props.output + " ")
        else if (type === "EnterLine")
            { let object = <span >{'   '}</span>
            let update_input = [...output,object]
            setoutput(update_input)}
        else
            props.setColor(type)
    }
    function createButtons(setOutput) {
        const specialKeys = ['Red', 'Yellow', 'Tab', 'Blue']
        let x = specialKeys.map((s) => {
           return <button onClick={() => setOutput(s)}>{s}</button>
        })
        return x

    }

    return (<>{createButtons(setOutput)}</>)
}
export default SpecialKey;