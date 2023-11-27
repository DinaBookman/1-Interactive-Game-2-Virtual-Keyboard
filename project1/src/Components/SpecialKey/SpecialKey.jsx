import React, { createElement, useState } from 'react'
function SpecialKey(props) {
    function setOutput(type) {
        switch (type) {
            case "Delete":
                props.setoutput(props.output.slice(0, -1))
                break;
            case "Space":
                {
                    let object = <span >{" "}</span>
                    let update_input = [...props.output, object, object, object]
                    props.setoutput(update_input)
                }break;


            case "Space":
                {
                    let object = <span >{" "}</span>
                    let update_input = [...props.output, object]
                    props.setoutput(update_input)
                }break;
            case 'increase Font Size':
                {
                    if(props.size<50)
                    props.setsize(parseInt(props.size)+6)
                }break;
            case 'decrease Font Size':
                {if(props.size>8)
                    props.setsize(parseInt(props.size)-6)
                }break;
                case 'DeleteAll':
                    {
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
        const specialKeys = ['Red', 'Green', 'Blue','Turquoise', 'Delete', 'Space', 'increase Font Size', 'decrease Font Size','clear','DeleteAll','Undo']
        let x = specialKeys.map((s) => {
            return <button onClick={() => setOutput(s)}>{s}</button>
        })
        return x
    }

    return (<>{createButtons(setOutput)}

    </>)
}
export default SpecialKey;