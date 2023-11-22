import React from 'react'
import { useState } from 'react'

function Language(props){
   return(<>
       <button  onClick={() =>props.language(props.type)}>
           {props.type}
    </button>
   </>)
}
export default Language
