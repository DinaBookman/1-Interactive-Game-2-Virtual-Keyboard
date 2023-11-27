import React, { createElement, useState } from 'react'

function Key(props) {
  const spanStyles = {
    "color":props.style[0],
    "fontFamily": props.style[1],
    "fontSize": props.style[2]
  };
  let char;
 
  if ( props.language == "English")
    char = props.keyInput.english;
  if ( props.language == "Hebrew")
    char = props.keyInput.hebrew;
  if ( props.language === "CapsLock"){
    char = props.keyInput.english.toUpperCase();}
    if(props.language=='LowerCase')
    char=props.keyInput.english;
  function setOutput(char) {
     let object=<span style={spanStyles}>{char}</span>
     let update_input = <span>{props.output}<span style = {spanStyles}>{char}</span></span>;
      props.setoutput(update_input)
  }
  return (<>
    <button onClick={() => setOutput(char)}>
      {char}
    </button></>)
}
export default Key
