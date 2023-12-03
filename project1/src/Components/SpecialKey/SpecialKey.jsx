import React, { createElement, useState } from 'react'
import { HexColorPicker } from "react-colorful";
function SpecialKey(props) {
    const [openColor, setopenColor] = useState(false)
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
            case 'increase Font Size':
                {

                    if (props.size < 100) {
                        props.addUndo(() => { props.setsize(props.size) })
                        props.setsize(parseInt(props.size) + 6)
                    }
                } break;
            case 'decrease Font Size':
                {
                    if (props.size > 8) {
                        props.addUndo(() => { props.setsize(props.size) })
                        props.setsize(parseInt(props.size) - 6)
                    }
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
            case 'cursive':
                {
                    props.addUndo(() => { props.setfontFamily(props.fontFamily) })
                    props.setfontFamily('cursive')
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
        const specialKeys = ['Delete', 'Space', 'increase Font Size', 'decrease Font Size', 'Clear', 'Undo', 'cursive', 'UpperAll', 'LowerAll']
        let x = specialKeys.map((s) => {
            return <button onClick={() => setOutput(s)}>{s}</button>
        })
        return x
    }
    function changeOpenColor() {

        if (openColor) {

            setopenColor(false)
        }

        else {
            setopenColor(true)
            props.addUndo(() => { props.setColor(props.color) })
        }
    }

    return (<>{createButtons(setOutput)}
        {openColor && <HexColorPicker color={props.color} onChange={props.setColor} />}
        <button onClick={() => { changeOpenColor() }}>change color</button>

    </>)
}
export default SpecialKey;