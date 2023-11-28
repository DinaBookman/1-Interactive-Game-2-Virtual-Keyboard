import React from 'react'
import { useState } from 'react'
function Language(props) {
    function chooseLang() {
        props.addUndo(()=>{props.setlanguage('CapsLock')})
        let displayLang;
        if (props.language === 'English' || props.language === 'CapsLock')
            displayLang = 'Hebrew';
        else if(props.language=='emoji') 
              displayLang='im'
        else displayLang = 'English'
        return displayLang;
    }
    
    function chooseCase() {
        let displayCase;
        props.addUndo(()=>{props.setlanguage('CapsLock')})
        if (props.language === 'CapsLock')
        displayCase = 'LowerCase';
        else displayCase = 'CapsLock'
        return displayCase;
    }

    let keyCase = chooseCase()
    let display = chooseLang()
    function setCase() {
        props.addUndo(()=>{props.setlanguage(props.language)})
        props.setlanguage(keyCase)
    }
    function setLangu() {
        props.addUndo(()=>{props.setlanguage(props.language)})
        props.setlanguage(display)
    }

    return (<>
        <button onClick={() => { setLangu() }}>
            {display}
        </button>
        <button onClick={() => { setCase() }}>
            Aa
        </button>
        <button onClick={()=>{props.setlanguage('emoji')}}>{':)'}</button>
    </>)
}
export default Language
