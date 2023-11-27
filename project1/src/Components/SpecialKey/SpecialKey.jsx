import React, { createElement, useState } from 'react'
function SpecialKey(props) {
    function setOutput(type) {
        if (type === "Delete")
            props.setoutput(props.output.slice(0, -1))
        else if (type === "Space")
    
           { let object = <span >{" "}</span>
           let update_input = [...props.output,object,object,object]
           props.setoutput(update_input)
    } 
        else if (type === "Tab")
            { 
                let x='\t'
            let object = <span >{x}</span>
            let update_input = [...props.output,object]
            props.setoutput(update_input)}
        else
            props.setColor(type)
    }
    function createButtons(setOutput) {
        const specialKeys = ['Red', 'Green', 'Tab', 'Blue','Delete','Space']
        let x = specialKeys.map((s) => {
           return <button onClick={() => setOutput(s)}>{s}</button>
        })
        return x

    }

    return (<>{createButtons(setOutput)}</>)
}
export default SpecialKey;