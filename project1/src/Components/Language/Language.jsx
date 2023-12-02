import React from 'react'
import { useState } from 'react'
function Language(props) {
    function chooseLang() {

        let displayLang;
        if (props.language === 'English' || props.language === 'CapsLock'||props.language==='LowerCase')
            displayLang = 'Hebrew';
        else displayLang = 'English'
        return displayLang;
    }
    function chooseCase() {
        let displayCase;
        if (props.language === 'CapsLock')
            displayCase = 'LowerCase';
        else displayCase = 'CapsLock'
        return displayCase;
    }

    let keyCase = chooseCase()
    let display = chooseLang()
    function setCase() {
        props.addUndo(() => { props.setlanguage(props.language) })
        props.setlanguage(keyCase)
    }
    function setLangu() {
        props.addUndo(() => { props.setlanguage(props.language) })
        props.setlanguage(display)
    }

    return (<>
        <button onClick={() => setLangu()

        }  >
            {display}
        </button >
        <button onClick={() => { setCase() }}>
            Aa
        </button>
        <button onClick={() => {
            props.setlanguage('emoji')
            props.addUndo(() => { props.setlanguage(props.language) })
        }
        }>{':)'
            }</button>
    </>)
}
export default Language
