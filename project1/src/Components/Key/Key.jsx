import React, { useState } from 'react'

function Key(props){
    let char;
    let language=props.language()
    if(language=="ENGLISH")
    char=props.keyInput.english;
    if(language=="HEBREW")
     char=props.keyInput.hebrew;
    if(language=="UPCASE")
     char=props.keyInput.english.toUpperCase();
    if(language=="LOWCASE")
    char=props.keyInput.english.toLowerCase();
    function setOutput(char)
    {
      
      props.setoutput(props.output+char)
    }
   return(<>
       <button onClick={() => setOutput(char)}>
           {char}
          
    </button></>)
}
export default Key
