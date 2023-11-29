import { useState } from 'react'
import React from 'react'
import Player from '../Player/Player.jsx'
function Players() {
    // const add = event => {
    //     players.push({ "name": event.target.value, 'steps': steps, });
    // }
    function addPlayer() {
        let person = prompt("Please enter UserName:", "Name...");
        let enabled;
        if (players.length==0)
             enabled=true
        else enabled=false
        setplayers([...players,{'userName':person,'enabled':enabled}])
    }
    const [players,setplayers]=useState([])
    function showPlayer(){
       return( players.map((user)=>{
            return <Player user={user} players={players} setplayers={setplayers}/>
        }))
    }
    return (<>
        <button onClick={()=>addPlayer()}>add Player</button>
      {showPlayer()}
    </>)
        
}
export default Players