import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Keyboard from '../src/Components/Keyboard/Keyboard.jsx'
import Language from '../src/Components/Language/Language.jsx'


function App() {
  const [language, setlanguage] = useState("ENGLISH");
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
    { hebrew: ".", english: "/" },

  ]

  return (
    <>
    
      <Keyboard qwerty_mapping={qwerty_mapping} language={getLanguage}/>
      <Language type="HEBREW" language={setlanguage}/>
    </>
  )
}

export default App
