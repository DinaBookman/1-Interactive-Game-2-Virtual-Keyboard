import React, { createElement, useState } from 'react'
function SpecialKey(props) {
    function setOutput(type) {
        switch (type) {
            case "Delete":
                props.addUndo(()=>{ setOutput(props.output.pop(),spanStyles,output,setoutput)})//
                props.setoutput(props.output.slice(0, -1))
                break;
            case "Space":
                {
                    props.addUndo(()=>{setOutput( setoutput(props.output.slice(0, -1)),spanStyles,output,setoutput)})
                    let object = <span >{" "}</span>
                    let update_input = [...props.output, object]
                    props.setoutput(update_input)
                }break;
            case 'increase Font Size':
                {
                    
                    if(props.size<50)
                    props.addUndo(()=>{setsize(parseInt(props.size)-6)})
                    props.setsize(parseInt(props.size)+6)
                }break;
            case 'decrease Font Size':
                {if(props.size>8)
                    props.addUndo(()=>{setsize(parseInt(props.size)-6)})
                    props.setsize(parseInt(props.size)-6)
                }break;
                case 'Clear':
                    {
                    props.addUndo(()=>{var all=props.output
                    all.map((x)=>setOutput(x,spanStyles,output,setoutput))})
                    props.setoutput([])
                    }
                break;
                case 'Undo':
                    {
                        let funcToDo=props.popUndo()
                        funcToDo()
                    }
                    
            default:
                props.setColor(type)
        }
    }
    function createButtons(setOutput) {
        const specialKeys = ['Red', 'Green', 'Blue','Turquoise', 'Delete', 'Space', 'increase Font Size', 'decrease Font Size','Clear','Undo']
        let x = specialKeys.map((s) => {
            return <button onClick={() => setOutput(s)}>{s}</button>
        })
        return x
    }

    return (<>{createButtons(setOutput)}

    </>)
}
export default SpecialKey;