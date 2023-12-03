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
        setpassivePlayers([...passivePlayers,{'userName':person,'enabled':enabled}])
    }
    function changeEnabeld(name) {
        let newArryPlayers = []
        for (let i = 0; i < players.length; i++) {
            if (players[i].userName == name) {
               players[i].enabled = false
                newArryPlayers.push(players[i])
                if(i==players.length-1)
               { newArryPlayers[0].enabled=true
                break;
               }
                players[i + 1].enabled = true;
                newArryPlayers.push(players[i + 1])
                for (let j = i + 2; j < players.length; j++)
                    newArryPlayers.push(players[j])
                break;
            }
            newArryPlayers.push(players[i])
        }
        setplayers(newArryPlayers)
    }
    function removeItem(name,array)
    {
        let removeItem;
        let newArray=[]
        for(let i=0;i<array.length;i++)
            if(array[i].userName!=name)
            newArray.push(array[i])
            else removeItem=array[i]
            return [newArray,removeItem]
    }
    function changePlayerToActive(name)
  {
    let returnRemove=removeItem(name,passivePlayers)
    let newPassivePlayers=returnRemove[0]
    let itemToAdd=returnRemove[1]
    setpassivePlayers(newPassivePlayers)
    setplayers([...players,itemToAdd])
  }
  function removeItemFromPassivePlayers(name)
  {
    let x = []
   passivePlayers.map((p) => {
        if (p.userName != name)
            x.push(p)
    })
    setpassivePlayers(x)
  }
  function changePlayerToPassive(name)
  {
    let returnRemove=removeItem(name,players)
    let newActivePlayers=returnRemove[0]
    let itemToAdd=returnRemove[1]
    setplayers(newActivePlayers)
    setpassivePlayers([...passivePlayers,itemToAdd])
  }
    const [players,setplayers]=useState([])
    const [passivePlayers,setpassivePlayers]=useState([])
    function showPlayer(array,passive){
       return( array.map((user)=>{
            return <Player  removeItemFromPassivePlayers={removeItemFromPassivePlayers} changeEnabeld={changeEnabeld} user={user} passive={passive} players={players}  setplayers={setplayers} changePlayerToPassive={changePlayerToPassive} changePlayerToActive={changePlayerToActive}/>
        }))
    }
    return (<>
        <button onClick={()=>addPlayer()}>add Player</button>
      {showPlayer(players,false)}
      {showPlayer(passivePlayers,true)}
    </>)
        
}
export default Players