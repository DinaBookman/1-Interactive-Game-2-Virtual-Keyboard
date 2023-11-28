import { useState } from 'react'
import React from 'react'
import Player from '../Player/Player.jsx'
function Players() {
    let players=[]
    const add = event => {
        players.push({ "name": event.target.value, 'steps': steps, });
    }
    function addPlayer() {
        /////////////
    }
    return (<>
        <button onClick={addPlayer()}>add Player</button>
        <div>
            <input bookMark="enter your name:" ></input>
            <button onClick={add}>Start</button>
        </div>
        < Player name={"Dina"}/>
        < Player name={"Sara"}/>
    </>)
        
}
export default Players