import { useState } from 'react'
import React from 'react'
import Key from '../Key/Key.jsx'
import SpecialKey from '../SpecialKey/SpecialKey.jsx'
import Language from '../Language/Language.jsx'





const qwerty_mapping = [
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
//let language = props.language()
/*if (language == "ENGLISH")
  char =  keyInput.english;
if (language == "HEBREW")
  char =  keyInput.hebrew;
*/
/*if (language == "UPCASE")
  char = props.keyInput.english.toUpperCase();
if (language == "LOWCASE")
  char =  keyInput.english.toLowerCase();
*/

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
  if (language == "ENGLISH")
    lang = "english";
  else
    lang = "hebrew";
  // for (let i = 0; i < 29; i++) {
  //   key = qwerty_mapping[i][lang];
  //   if (language == "UPCASE")
  //     key = (qwerty_mapping[i][lang]).toUpperCase();
  //   if (language == "LOWCASE")
  //     key = (qwerty_mapping[i][lang]).toLowerCase();
  let x = qwerty_mapping.map((e) => {
    key = e[lang];
    if (language == "UPCASE")
      key = (e[lang]).toUpperCase();
    if (language == "LOWCASE")
      key = (e[lang]).toLowerCase();
    return (createButton(key,spanStyles,output,setoutput))
  })
  return x;
}
function Keyboard(props) {



const [language, setlanguage] = useState("ENGLISH");
const [color, setColor] = useState('black');
const [fontSize, setfontSize] = useState('14');
const [fontFamily, setfontFamily] = useState('ariel');
  //const[output,setoutput]=useState(<div></div>)
  const style = [color, fontFamily, fontSize]
  const spanStyles = {
    "color": style[0],
    "fontFamily": style[1],
    "fontSize": style[2]
  };
  let currentStyle = spanStyles;

  return (<>
    {showKeys(language,spanStyles,props.output,props.setoutput)}
      <SpecialKey output={props.output} setoutput={props.setoutput} setColor={setColor}/>
</>
)
}
export default  Keyboard;