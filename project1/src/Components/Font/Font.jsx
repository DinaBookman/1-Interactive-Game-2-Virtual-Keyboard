import React from 'react'
function Font(props) {

    function setFont() {
        props.addUndo(() => { props.setfontFamily(props.fontFamily) })
        if (props.fontFamily == 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif')
            props.setfontFamily('cursive')
        else props.setfontFamily('Inter, system-ui, Avenir, Helvetica, Arial, sans-serif')
    }

    function displayFont() {
        if (props.fontFamily === 'cursive')
            return 'systemi'
        else return 'Cursive'
    }

    return (<><button className='key' onClick={() => setFont()}>{displayFont()}</button></>)
}
export default Font;