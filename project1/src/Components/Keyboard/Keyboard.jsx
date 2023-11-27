import { useState } from 'react'
import React from 'react'
import Key from '../Key/Key.jsx'
import SpecialKey from '../SpecialKey/SpecialKey.jsx'
import Language from '../Language/Language.jsx'


function Keyboard(props) {
//const[output,setoutput]=useState(<div></div>)
  const [language, setlanguage] = useState("ENGLISH");
  const[color,setColor]=useState('black');
  const[fontSize,setfontSize]=useState('14');
  const[fontFamily,setfontFamily]=useState('ariel'); 
 
     
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
   
      function showKeys(){
        var lang,key;
        if (language == "ENGLISH")
        lang="english";
        else
          lang="hebrew";
        for(let i=0;i<29;i++){
        key=qwerty_mapping[i][lang];
        if (language == "UPCASE")
          key = (qwerty_mapping[i][lang]).toUpperCase();
        if (language == "LOWCASE")
        key = (qwerty_mapping[i][lang]).toLowerCase();
        createButton(key)
        }
      }
      
      function  createButton(key) {
        return(<button  onClick={() => setOutput(key)} >{key}</button>)}
        
      
        
 
const style=[props.color,props.fontFamily,props.fontSize]
const spanStyles = {
    "color": style[0],
    "fontFamily": style[1],
    "fontSize": style[2]
  };
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
  let currentStyle =   spanStyles;
  
  function setOutput(char) {
     let object=<span style={spanStyles}>{char}</span>
     let update_input = <span>{props.output}<span style = {spanStyles}>{char}</span></span>;
      props.setoutput(update_input)
  }
  

    return (<>
    
    {showKeys()}
    <button  onClick={() => setOutput(A)} >A</button></>)/*<>
    
       <div>
            <Key keyInput={props.qwerty_mapping[0]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[1]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[2]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[3]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[4]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[5]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[6]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[7]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[8]} language={props.language}  style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[9]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
        </div>
        <div>
            <Key keyInput={props.qwerty_mapping[10]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[11]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[12]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[13]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[14]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[15]} language={props.language }style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[16]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[17]} language={props.language}  style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[18]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[19]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
        </div>
        <div>
            <Key keyInput={props.qwerty_mapping[20]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[21]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[22]} language={props.language}  style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[23]} language={props.language}style={style}  output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[24]} language={props.language}  style={style}output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[25]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[26]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[27]} language={props.language}style={style}  output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[28]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[29]} language={props.language}style={style}  output={props.output} setoutput={props.setoutput}></Key>
        </div>
        <Language type="HEBREW"  language={props.setlanguage} />
        <Language type="ENGLISH" language={props.setlanguage} />
        <Language type="UPCASE" language={props.setlanguage} />
        <Language type="LOWCASE" language={props.setlanguage} />
        <SpecialKey output={props.output} setoutput={props.setoutput} type="Delete"></SpecialKey>
        <SpecialKey output={props.output} setoutput={props.setoutput} type="EnterLine"></SpecialKey>
        <SpecialKey output={props.output} setoutput={props.setoutput} type="Space"></SpecialKey>
        <SpecialKey  setColor={props.setColor}  type="Red" ></SpecialKey>
        <SpecialKey  setColor={props.setColor} type="Green" ></SpecialKey>
        <SpecialKey  setfontSize={props.setSize}  type='12' ></SpecialKey>
        <SpecialKey  setfontSize={props.setSize}  type='20' ></SpecialKey>
        <SpecialKey setfontFamily={props.setfontFamily} type='Roboto Mono'></SpecialKey>

    </>
    )
    */



 }
    
export default Keyboard
 /*const defualtKeyboard1 = ["q", "w", "r", "t", "y", "u", "i", "o", "p",]
   const defualtKeyboard2=["a", "s", "d", "f", "g", "h", "j", "k", "l", "ENTER",]
   const defualtKeyboard3=["z", "x", "c", "v", "b", "n", "m", ".", ",","SPACE"];
   const  hebrewKeyboard1 = [".", ",", "ק", "ר", "א", "ט", "ו", "ן", "ם", "פ",]
   const  hebrewKeyboard2 =["ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף", "ENTER",]
   const  hebrewKeyboard3 = ["ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ","SPACE"];
   const numberKeyboard1=["1","2","3","4","5","6","7","8","9","0",]
   const numberKeyboard2= ["!","@","£","$","%","^","&","*","(",")",]
    const numberKeyboard3= ["_","+","=","-",":",";",",",".","<",">","?","/",">"]*/