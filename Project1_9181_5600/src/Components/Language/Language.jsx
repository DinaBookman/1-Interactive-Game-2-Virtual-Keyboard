import React from 'react'
import { useState } from 'react'

function language(props){
     
    
   return(<>
       <button  onClick={() => setlanguage("HEBREW")}>
           HEBREW
    </button><button onClick={setlanguage("ENGLISH")}>
           ENGLISH
    </button>
    <button onClick={setlanguage("LOWCASE")}>
           lowerCase
    </button>
    <button onClick={setlanguage("UPCASE")}>
           uperCase
    </button></>)
}
export default Key
