import { useState } from 'react'
import React from 'react'
import SpecialKey from '../SpecialKey/SpecialKey.jsx'
import Language from '../Language/Language.jsx'
import Keys from '../Keys/Keys.jsx'
import Size from '../Size/Size.jsx'
import Color from '../Color/Color.jsx'
import Font from '../Font/Font.jsx'
const undo = []

function Keyboard(props) {
  const [language, setlanguage] = useState("English");
  const [color, setColor] = useState('black');
  const [fontSize, setfontSize] = useState('14');
  const [fontFamily, setfontFamily] = useState('Inter, system-ui, Avenir, Helvetica, Arial, sans-serif');
  const[output,setoutput]=useState([])

  function addUndo(bb) {
    undo.push(bb)
  }
  function popUndo() {
    return undo.pop()
  }
  
  const style = [color, fontFamily, fontSize]
  const spanStyles = {
    "color": style[0],
    "fontFamily": style[1],
    "fontSize": style[2]
  };
  const displayStyleStyle = {
    //border:"solid 0.5px rgb(123, 121, 121)",
    fontFamily:"cursive",
    fontSize: "12px"
  };
  return (<>
    <link rel='stylesheet' type='css' href='./Keyboard.css'/> 
    <div className="outPutDiv">{output}</div>
    <div className='container'>
      <div className="keyboard">
        <Keys spanStyles={spanStyles} addUndo={addUndo} language={language} output={output} setoutput={setoutput}/>
      <SpecialKey output={ output} setoutput={setoutput}   fontFamily={fontFamily}   size={fontSize}   addUndo={addUndo} undo={undo} popUndo={popUndo}   />
      <div><Language setlanguage={setlanguage} language={language} addUndo={addUndo}/>
      <Size size={fontSize} setsize={setfontSize} addUndo={addUndo}/>
      <Font setfontFamily={setfontFamily}  fontFamily={fontFamily}addUndo={addUndo}/>
     <Color setColor={setColor} color={color} addUndo={addUndo}/></div></div>
    </div>
    <div className="display-style" style={displayStyleStyle}><label>color:{style[0]}<br/>
  font:{style[1]}<br/>
  size:{style[2]}
  </label></div>
  </>
  )
}
export default Keyboard;