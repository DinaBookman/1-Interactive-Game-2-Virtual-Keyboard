import React from 'react'
import { useState } from 'react'
function Language(props) {
    function chooseLang() {
        let displayLang;
        if (props.language === 'English' || props.language === 'CapsLock')
            displayLang = 'Hebrew';
        else displayLang = 'English'
        return displayLang;
    }
    // function chooseCase() {
    //     let displaycase;
    //     if (props.language === 'English')
    //     displaycase = 'Hebrew';
    //     else displayLang = 'English'
    //     return displaycase;
    // }
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
        props.setlanguage(keyCase)
    }
    function setLangu() {
        props.addUndo(()=>{setlanguage(props.language)})
        props.setlanguage(display)
    }

    return (<>
        <button onClick={() => { setLangu() }}>
            {display}
        </button>
        <button onClick={() => { setCase() }}>
            Aa
        </button>
    </>)
}
export default Language
