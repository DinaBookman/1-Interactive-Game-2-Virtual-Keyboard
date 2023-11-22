import React, { useState } from 'react'

function Key(props){
    if(useState==ENGLISH)
    char=props.english;
    if(useState==HEBREW)
     char=props.hebrew;
    if(useState==UPCASE)
     char=props.english.toUpperCase();
    if(useState==LOWCASE)
    char=props.english.toLowerCase();
   return(<>
       <button onClick={outputKey(char)}>
           {char}
          
    </button></>)
}
export default Key
