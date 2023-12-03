import { useState } from 'react'
import React from 'react'

function Keys(props) {
  const qwerty_mapping1 = [
    { hebrew: "1", english: "1", im: '😍' },
    { hebrew: "2", english: "2", im: '😂' },
    { hebrew: "3", english: "3", im: '🤣' },
    { hebrew: "4", english: "4", im: '😋' },
    { hebrew: "5", english: "5", im: '😘' },
    { hebrew: "6", english: "6", im: '😎' },
    { hebrew: "7", english: "7", im: '😪' },
    { hebrew: "8", english: "8", im: '😀' },
    { hebrew: "9", english: "9", im: '😣' },
    { hebrew: "0", english: "0", im: '😛' }]
  const qwerty_mapping2 = [
    { hebrew: "/", english: "q", im: '👧' },
    { hebrew: "'", english: "w", im: '👦' },
    { hebrew: "ק", english: "e", im: '👵' },
    { hebrew: "ר", english: "r", im: '👴' },
    { hebrew: "א", english: "t", im: '💂‍♂️' },
    { hebrew: "ט", english: "y", im: '👷‍♂️' },
    { hebrew: "ו", english: "u", im: '👩‍💻' },
    { hebrew: "ן", english: "i", im: '👩‍🎓' },
    { hebrew: "ם", english: "o", im: '💁‍♂️' },
    { hebrew: "פ", english: "p", im: '👩‍🏫' }]
  const qwerty_mapping3 = [
    { hebrew: "ש", english: "a", im: '👎' },
    { hebrew: "ד", english: "s", im: '👏' },
    { hebrew: "ג", english: "d", im: '👌' },
    { hebrew: "כ", english: "f", im: '☝' },
    { hebrew: "ע", english: "g", im: '🤲' },
    { hebrew: "י", english: "h", im: '🤝' },
    { hebrew: "ח", english: "j", im: '✍' },
    { hebrew: "ל", english: "k", im: '🤏' },
    { hebrew: "ך", english: "l", im: '🤙' },
    { hebrew: "ף", english: ";", im: '👍' }]
  const qwerty_mapping4 = [
    { hebrew: "ז", english: "z", im: '💖' },
    { hebrew: "ס", english: "x", im: '💔' },
    { hebrew: "ב", english: "c", im: '💓' },
    { hebrew: "ה", english: "v", im: '🤍' },
    { hebrew: "נ", english: "b", im: '🧡' },
    { hebrew: "מ", english: "n", im: '💚' },
    { hebrew: "צ", english: "m", im: '💙' },
    { hebrew: "ת", english: ",", im: '💜' },
    { hebrew: "ץ", english: ".", im: '🤎' },
    { hebrew: ".", english: "/", im: '🖤' }
  ]
  function setOutput(key, spanStyles, output, setoutput, addUndo) {
    addUndo(() => { setoutput(output) })
    let object = <span style={spanStyles}>{key}</span>
    let update_input = [...output, object]
    setoutput(update_input)
  }
  function createButton(key, spanStyles, output, setoutput, addUndo) {
    return (<button onClick={() => {
      setOutput(key, spanStyles, output, setoutput, addUndo)
    }
    } >{key}</button>)
  }
  function showKeys(language, spanStyles, output, setoutput, addUndo,row) {
    var lang, key;
    if (language == "English" || language === 'CapsLock' || language === 'LowerCase')
      lang = "english";
    else if (language === 'emoji')
      lang = 'im'
    else
      lang = "hebrew";
  
    let x = row.map((e) => {
      key = e[lang];
      if (language == "CapsLock")
        key = (e[lang]).toUpperCase();
      if (language == 'LowerCase')
        key = (e[lang]);
  
      return (createButton(key, spanStyles, output, setoutput, addUndo))
    })
  
    return x;
  }
  function showRows() {
    let rowArrays = [qwerty_mapping1, qwerty_mapping2, qwerty_mapping3, qwerty_mapping4]
    let qwertyKeys = rowArrays.map((row) => <div>{showKeys(props.language, props.spanStyles, props.output, props.setoutput, props.addUndo,row)} </div>)
    return qwertyKeys
  }
  return (<>
    {showRows()}
  </>)
}
export default Keys