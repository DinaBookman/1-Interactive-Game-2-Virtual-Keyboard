import { useState } from 'react'
import React from 'react'
import Key from '../Key/Key.jsx'
import SpecialKey from '../SpecialKey/SpecialKey.jsx'
import Language from '../Language/Language.jsx'





const qwerty_mapping = [
  { hebrew: "1", english: "1" },
  { hebrew: "2", english: "2" },
  { hebrew: "3", english: "3" },
  { hebrew: "4", english: "4" },
  { hebrew: "5", english: "5" },
  { hebrew: "6", english: "6" },
  { hebrew: "7", english: "7" },
  { hebrew: "8", english: "8" },
  { hebrew: "9", english: "9" },
  { hebrew: "0", english: "0" },
  { hebrew: "/", english: "q" },
  { hebrew: "'", english: "w" },
  { hebrew: "ק", english: "e" },
  { hebrew: "ר", english: "r" },
  { hebrew: "א", english: "t" },
  { hebrew: "ט", english: "y" },
  { hebrew: "ו", english: "u" },
  { hebrew: "ן", english: "i" },
  { hebrew: "ם", english: "o" },
  { hebrew: "פ", english: "p" },
  { hebrew: "ש", english: "a" },
  { hebrew: "ד", english: "s" },
  { hebrew: "ג", english: "d" },
  { hebrew: "כ", english: "f" },
  { hebrew: "ע", english: "g" },
  { hebrew: "י", english: "h" },
  { hebrew: "ח", english: "j" },
  { hebrew: "ל", english: "k" },
  { hebrew: "/", english: "q" },
  { hebrew: "'", english: "w" },
  { hebrew: "ק", english: "e" },
  { hebrew: "ר", english: "r" },
  { hebrew: "א", english: "t" },
  { hebrew: "ט", english: "y" },
  { hebrew: "ו", english: "u" },
  { hebrew: "ן", english: "i" },
  { hebrew: "ם", english: "o" },
  { hebrew: "פ", english: "p" },
  { hebrew: "ש", english: "a" },
  { hebrew: "ד", english: "s" },
  { hebrew: "ג", english: "d" },
  { hebrew: "כ", english: "f" },
  { hebrew: "ע", english: "g" },
  { hebrew: "י", english: "h" },
  { hebrew: "ח", english: "j" },
  { hebrew: "ל", english: "k" },
  { hebrew: "ך", english: "l" },
  { hebrew: "ף", english: ";" },
  { hebrew: "ז", english: "z" },
  { hebrew: "ס", english: "x" },
  { hebrew: "ב", english: "c" },
  { hebrew: "ה", english: "v" },
  { hebrew: "נ", english: "b" },
  { hebrew: "מ", english: "n" },
  { hebrew: "צ", english: "m" },
  { hebrew: "ת", english: "," },
  { hebrew: "ץ", english: "." },
  { hebrew: ".", english: "/" }
]
let char;
 

function setOutput(char,spanStyles,output,setoutput) {
  let object = <span style={spanStyles}>{char}</span>
  let update_input = [...output,object]
  setoutput(update_input)
}
function createButton(key,spanStyles,output,setoutput) {
  return (<button onClick={() => setOutput(key,spanStyles,output,setoutput)} >{key}</button>)
}
function showKeys(language,spanStyles,output,setoutput) {
  var lang, key;
  if (language == "English"||language==='CapsLock'||language==='LowerCase')
    lang = "english";
  else
    lang = "hebrew";
  
  let x = qwerty_mapping.map((e) => {
    key = e[lang];
    if (language == "CapsLock")
      key = (e[lang]).toUpperCase();
    if(language=='LowerCase')
      key = (e[lang]);

    return (createButton(key,spanStyles,output,setoutput))
  })

  return x;
}
const undo=[]

function Keyboard(props) {
const [language, setlanguage] = useState("English");
const [color, setColor] = useState('black');
const [fontSize, setfontSize] = useState('14');
const [fontFamily, setfontFamily] = useState('ariel');
function addUndo(bb)
{
  undo.push(bb)
}
function popUndo()
{
 return  undo.pop()
}
  const style = [color, fontFamily, fontSize]
  const spanStyles = {
    "color": style[0],
    "fontFamily": style[1],
    "fontSize": style[2]
  };
  let currentStyle = spanStyles;

  return (<>
    {showKeys(language,spanStyles,props.output,props.setoutput)}
      <SpecialKey output={props.output} setoutput={props.setoutput} setColor={setColor} size={fontSize} setsize={setfontSize} addUndo={addUndo} undo={undo} popUndo={popUndo}/>
      <Language setlanguage={setlanguage} language={language} addUndo={addUndo}/>
</>
)
}
export default  Keyboard;