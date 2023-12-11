import { lazy, useState } from 'react'
import React from 'react'
import './OptionButton.css'

function OptionButton(props) {
    function newGame() {
        props.setnumber(props.RangeRandom);
        props.setsteps(0);
        activate();
         
         
    }
let  activate=()=>{
    let count=0;
    let newArray=[];
    for (let i = 0; i < props.players.length; i++)
        if(props.players[i].active==true)
            count++;
    let enabled=(count) ?false: true;
    for (let i = 0; i < props.players.length; i++) 
        if (props.players[i].userName === props.name)
                newArray.push({ 'userName':props.players[i].userName, 'active': true , 'enabled' :enabled,'games':props.players[i].games})
        else
            newArray.push(props.players[i])
    props.setplayers(newArray)  
              
    }

 
    function exit() {
        let newArray=[];
        for (let i = 0; i < props.players.length; i++) 
           if (props.players[i].userName != props.name)
               newArray.push(props.players[i])
       props.setplayers(newArray)  
    }
    return (
        <><button className='optionB' onClick={() => newGame()}>{'Start new Game'}</button>
        <button className='optionB' onClick={() => exit()}>{'Exit'}</button></>)
}
export default OptionButton;
