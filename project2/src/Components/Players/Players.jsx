import { useState } from 'react'
import React from 'react'
import Player from '../Player/Player.jsx'
function Players() {
    // const add = event => {
    //     players.push({ "name": event.target.value, 'steps': steps, });
    // }
    function addPlayer() {
        let person = prompt("Please enter UserName:", "Name...");
        setplayers([...players,person])
    }
    const [players,setplayers]=useState([])
    function showPlayer(){
       return( players.map((userName)=>{
            return <Player userName={userName} players={players} setplayers={setplayers}/>
        }))
    }
    
    return (<>
        <button onClick={()=>addPlayer()}>add Player</button>
      {showPlayer()}
    </>)
        
}
export default Players