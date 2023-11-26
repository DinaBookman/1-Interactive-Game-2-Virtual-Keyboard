import { useState } from 'react'
import './App.css'
import Keyboard from '../src/Components/Keyboard/Keyboard.jsx'
import Language from '../src/Components/Language/Language.jsx'
import SpecialKey from '../src/Components/SpecialKey/SpecialKey.jsx'


function App() {
  const[output,setoutput]=useState(<div></div>)
  const [language, setlanguage] = useState("ENGLISH");
  const[color,setColor]=useState('black');
  const[fontSize,setfontSize]=useState('14');
  const[fontFamily,setfontFamily]=useState('ariel');
//const messege=output.map((span)=>{span.innerText});

  function getLanguage()
  {
    return language
  }
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

  return (
    <>
    <div>{output}</div>
      <Keyboard qwerty_mapping={qwerty_mapping} language={getLanguage} setlanguage={setlanguage}
       output={output} setoutput={setoutput} setColor={setColor} 
       setfontSize={setfontSize} setfontFamily={setfontFamily} color={color} 
       fontSize={fontSize} fontFamily={fontFamily}/>
    </>
  )
}

export default App
