import { useState } from 'react'
import './App.css'
import Keyboard from '../src/Components/Keyboard/Keyboard.jsx'
import Language from '../src/Components/Language/Language.jsx'
import SpecialKey from '../src/Components/SpecialKey/SpecialKey.jsx'
function App() {

  const[output,setoutput]=useState([])
  return (
    <>
    <div id="outPutDiv">{output}</div>
     <Keyboard output={output} setoutput={setoutput}/>
    </>
  )
}
export default App
