import React, { createElement, useState } from 'react'

function Key(props) {
  const spanStyles = {
    "color":props.style[0],
    "fontFamily": props.style[1],
    "fontSize": props.style[2]
  };
  let char;
  let language = props.language()
  if (language == "ENGLISH")
    char = props.keyInput.english;
  if (language == "HEBREW")
    char = props.keyInput.hebrew;
  if (language == "UPCASE")
    char = props.keyInput.english.toUpperCase();
  if (language == "LOWCASE")
    char = props.keyInput.english.toLowerCase();
  let currentStyle = props.styles;
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
