import { useState } from 'react'
import React from 'react'
import OptionButton from '../OptionButton/OptionButton.jsx'
import CalcButtons from '../CalcButtons/CalcButtons.jsx'
const MAX_WIN_NUMBER = 10
let RangeRandom = () => Math.floor(Math.random() * MAX_WIN_NUMBER)
function Player(props) {
    const [start, setstart] = useState(false)
    const [steps, setsteps] = useState(0)
    const [number, setnumber] = useState(RangeRandom)
    let bb = (localStorage.getItem(props.user.userName) === null)
    let vv
    if(props.user.games===[])
     vv= (bb) ? [] : localStorage.getItem(props.user.userName)
     else vv=props.user.games
     const [games, setgames] = useState(vv)
    // function set() {
    //     let x=localStorage.getItem(props.userName) 
    //     if (x==null)
    //         return ([])
    //     return (localStorage.getItem(props.userName).games)
    // }

    //    function showGames(){
    //     let x
    //     for (let i;i<games.length;i++)
    //     {
    //         x+=games[i]+','
    //     }
    //    }
    let getEnabled = () => {
        for (let i=0; i < props.players.length; i++) {
            if (props.players[i].userName === props.user.userName)
                return props.players[i].enabled;
        }
    }

    return (<>
        <div>gamer name:  {props.user.userName}</div>
       { !props.passive?<div>press buttons to reach 100: {number}</div>:<div>press Start to start game!</div>}
        <div> steps: {steps}</div>
        <div> Previous Game Steps: {games}</div>
        <div>
            {(!props.passive&&getEnabled()==true)? <CalcButtons changePlayerToPassive={props.changePlayerToPassive} name={props.user.userName} changeEnabeld={props.changeEnabeld} games={games} setgames={setgames} MAX_WIN_NUMBER={MAX_WIN_NUMBER} setplayers={props.setplayers} players={props.players} user={props.user} steps={steps} setsteps={setsteps} setstart={setstart} number={number} setnumber={setnumber} />:null}
            {props.passive ? <OptionButton removeItemFromPassivePlayers={props.removeItemFromPassivePlayers}passivePlayers={props.passivePlayers} setpassivePlayers={props.setpassivePlayers}changePlayerToActive={props.changePlayerToActive} RangeRandom={RangeRandom} setstart={setstart} name={props.user.userName} games={games} setnumber={setnumber} players={props.players} setsteps={setsteps} setplayers={props.setplayers} /> : null}
        </div>
    </>)
} export default Player