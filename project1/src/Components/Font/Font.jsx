import React, { createElement, useState } from 'react'
function Font(props){
    function setFont(){
        props.addUndo(() => { props.setfontFamily(props.fontFamily) })
        props.setfontFamily('cursive')
    }
    return(<><button  onClick={()=>setFont()}>cursive</button></>)}
export default Font;