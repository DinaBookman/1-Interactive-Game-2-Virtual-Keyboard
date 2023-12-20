import { useState } from 'react'
import './Players.css'
import React from 'react'
import Player from '../Player/Player.jsx'

function Players(props) {
  const [players, setplayers] = useState([])

  function addPlayer() {
    let person = prompt("Please enter UserName:", "Name...");
    if(person){
    let flag = false
    let newArray=[]
    for (let i = 0; i < players.length; i++)
      if (players[i].userName === person) {
        newArray.push({ 'userName': players[i].userName, 'active': false, 'enabled': false, 'games': players[i].games, 'display': true })
        flag = true
      }
      else
        newArray.push(players[i])
    if (flag)
      setplayers(newArray)
    else {
      let games = JSON.parse(localStorage.getItem(person))
      setplayers([...players, { 'userName': person, 'active': false, 'enabled': false, 'games': games, 'display': true }])
    }
  }
  }

  function changeEnabeld(name) {
    let newArryPlayers = [];
    let player;
    let flag = false;
    let nextEnabledPlayer;
    for (let i = 0; i < players.length; i++) {
      if (flag === true && players[i].active === true && players[i].display === true) {
        nextEnabledPlayer = i;
        break;
      }
      if (players[i].userName === name) {
        flag = true;
        player = i;

      }

      if (i == players.length - 1)
        i = -1;
    }
    if (player === nextEnabledPlayer)
      player = -1;
    for (let j = 0; j < players.length; j++) {
      if (j === player) {
        newArryPlayers.push({ 'userName': players[j].userName, 'active': players[j].active, 'enabled': false, 'games': players[j].games, 'display': true });
      }
      else if (j === nextEnabledPlayer) {
        newArryPlayers.push({ 'userName': players[j].userName, 'active': players[j].active, 'enabled': true, 'games': players[j].games, 'display': true })
      }
      else
        newArryPlayers.push(players[j])
    }
    setplayers(newArryPlayers);
    return newArryPlayers
  }
  function showPlayer(array) {

    return (array.map((user, key) => {
      return <Player key={key} updateWinners={props.updateWinners}
        changeEnabeld={changeEnabeld} user={user} players={players} setplayers={setplayers}
      />
    }))
  }
  return (<>
    <button className="addButton" onLoad={() => props.updateWinners()} onClick={() => addPlayer()}>add Player</button>
    {showPlayer(players)}
  </>)

}
export default Players