import { lazy, useState } from 'react'
import React from 'react'


function OptionButton(props) {
    function newGame() {
        props.setnumber(RangeRandom)
        props.setsteps(0)
    }
    function exit() {
        localStorage.removeItem(props.name)
        localStorage.setItem(props.name,{'name':props.name,'games':props.games})
       console.log(props.players)
       let x=props.players.map((p ) => {
        if(p !=props.name)
            return p 
    })
        props.setplayers()
    }
    return (
        <><button onClick={() => newGame()}>{'Start new Game'}</button>
            <button onClick={() => exit()}>{'Exit'}</button></>)
}
export default OptionButton;
