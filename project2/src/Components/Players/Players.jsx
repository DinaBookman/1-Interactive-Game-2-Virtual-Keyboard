import { useState } from 'react'
import React from 'react'
import Player from '../Player/Player.jsx'

function Players(props) {
     const [players, setplayers] = useState([])
  
     function addPlayer() {
         let person = prompt("Please enter UserName:", "Name...");
         let games=JSON.parse( localStorage.getItem(person))
         setplayers([... players, { 'userName': person, 'active': false , 'enabled' :false,'games':games}])
} 

  function changeEnabeld(name) {
    let newArryPlayers = [];
    let player;
    let flag=false;
    let nextEnabledPlayer;
    for (let i = 0; i < players.length; i++) {
      if(flag===true && players[i].active===true){
        nextEnabledPlayer=i;
        break;
     }
       if (players[i].userName === name) {
         flag=true;
         player=i;
          
        }
        
        if(i==players.length-1)
           i=-1;
      }
      if(player===nextEnabledPlayer)
            player=-1;
      for(let j=0;j<players.length ;j++)
      {
        if(j===player){
          newArryPlayers.push({'userName': players[j].userName, 'active': players[j].active , 'enabled' :false,'games':players[j].games});
        }
        else if(j===nextEnabledPlayer)
        {
          newArryPlayers.push({'userName': players[j].userName, 'active': players[j].active , 'enabled' :true,'games':players[j].games})
        }
        else
           newArryPlayers.push(players[j])
      }
      setplayers(newArryPlayers);
    }
  function showPlayer(array) {
    
    return (array.map((user,key) => {  return <Player key={key} updateWinners={props.updateWinners}   
      changeEnabeld={changeEnabeld} user={user} players={players}   setplayers={setplayers} 
        />
    }))
  }
  return (<>
    <button onLoad={()=>props.updateWinners()} onClick={() => addPlayer()}>add Player</button>
    {showPlayer(players)}
  </>)

}
export default Players