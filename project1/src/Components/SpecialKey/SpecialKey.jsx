import React from 'react'
function SpecialKey(props) {
    function actionType(type) {
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
                let newOutput = props.output.map((span) => {
                    let key = span.props.children;
                    if (span.props.children.charCodeAt(0) > 64 && span.props.children.charCodeAt(0) < 123)
                        key = key.toUpperCase()
                    let object = <span style={span.props.style}>{key}</span>
                    return object
                })
                props.setoutput(newOutput)
            } break

            case 'LowerAll': {
                props.addUndo(() => { props.setoutput(props.output) })
                let newOutput = props.output.map((span) => {
                    let key = span.props.children;
                    if (span.props.children.charCodeAt(0) > 64 && span.props.children.charCodeAt(0) < 123)
                        key = key.toLowerCase()
                    let object = <span style={span.props.style}>{key}</span>
                    return object
                })
                props.setoutput(newOutput)
            } break;
        }
    }
    function createButtons(actionType) {
        const specialKeys = ['Delete', 'Space', 'Clear', 'Undo', 'UpperAll', 'LowerAll']
        let displayB = specialKeys.map((key) => {
            return <button className='key' id={key} onClick={() => actionType(key)}>{key}</button>
        })
        return <div className='keyboard-row'>{displayB}</div>
    }


    return (<>{createButtons(actionType)}</>)
}
export default SpecialKey;