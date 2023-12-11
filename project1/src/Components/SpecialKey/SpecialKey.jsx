import React, { createElement, useState } from 'react'
import { HexColorPicker } from "react-colorful";
function SpecialKey(props) {
    function setOutput(type) {
        switch (type) {
            case "Delete":
                let span = props.output[props.output.length - 1]
                props.setoutput(props.output.slice(0, -1))
                props.addUndo(() => { props.setoutput([...props.output.slice(0, -1), span]) })
                break;
            case "Space":
                {
                    props.addUndo(() => { props.setoutput(props.output) })
                    let object = <span >{" "}</span>
                    let update_input = [...props.output, object]
                    props.setoutput(update_input)
                } break;
             
            case 'Clear':
                {
                    props.addUndo(() => {
                        let all = props.output
                        props.setoutput(all)
                    })
                    props.setoutput([])
                }
                break;
            case 'Undo':
                {
                    if (props.undo.length > 0) {
                        let funcToDo = props.popUndo()
                        funcToDo()
                    }
                } break
            case 'UpperAll': {
                props.addUndo(() => { props.setoutput(props.output) })
                let x = props.output.map((e) => {
                    let key = e.props.children;
                    if (e.props.children.charCodeAt(0) > 64 && e.props.children.charCodeAt(0) < 123) {

                        key = key.toUpperCase()
                    }
                    let object = <span style={e.props.style}>{key}</span>
                    return object
                })
                props.setoutput(x)
            } break
             
            case 'LowerAll': {
                props.addUndo(() => { props.setoutput(props.output) })
                let x = props.output.map((e) => {
                    let key = e.props.children;
                    if (e.props.children.charCodeAt(0) > 64 && e.props.children.charCodeAt(0) < 123) {

                        key = key.toLowerCase()
                    }
                    let object = <span style={e.props.style}>{key}</span>
                    return object
                })
                props.setoutput(x)
            } break;
            default:
                {
                    props.addUndo(() => { props.setColor(props.color) })
                    props.setColor(type)
                }
        }
    }
    function createButtons(setOutput) {
        const specialKeys = [{'type':'Delete','class':'delete'},{'type': 'Space','class':'key-space-bar'},  {'type':'Clear','class':'clear'}, {'type':'Undo','class':'undo'},  {'type':'UpperAll','class':'upeer'},{'type': 'LowerAll','class':'lower'}]
        let x = specialKeys.map((s) => {
            return <button className='key' id={s.class}onClick={() => setOutput(s.type)}>{s.type}</button>
        })
        return <div className='keyboard-row'>{x}</div>
    }
  

    return (<>{createButtons(setOutput)}</>)
}
export default SpecialKey;