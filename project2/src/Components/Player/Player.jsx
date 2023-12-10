import { useState } from 'react'
import React from 'react'
import OptionButton from '../OptionButton/OptionButton.jsx'
import CalcButtons from '../CalcButtons/CalcButtons.jsx'
const MAX_WIN_NUMBER = 10
let RangeRandom = () => Math.floor(Math.random() * MAX_WIN_NUMBER)
function Player(props) {
    const [steps, setsteps] = useState(0)
    const [number, setnumber] = useState(RangeRandom)
    let isEmpty = (localStorage.getItem(props.user.userName) === null)
    let startState = (isEmpty) ? [] : JSON.parse(localStorage.getItem(props.user.userName))
    const [games, setgames] = useState(startState)

    let getEnabled = () => {
        for (let i = 0; i < props.players.length; i++) {
            if (props.players[i].userName === props.user.userName)
                return props.players[i].enabled;
        }
    }

    let isActive = () => {
        for (let i = 0; i < props.players.length; i++) {
            if (props.players[i].userName === props.user.userName)
                return props.players[i].active;
        }
    }
    function displayGames() {
        let display = "";
        games.map((game) => display = display + game + ',')
        return display
    }
    return (<>
        <div>gamer name:  {props.user.userName}</div>
        { isActive()? <><div>press buttons to reach 100: {number}</div><div> steps: {steps}</div></> : <div>press Start to start game!</div>}
        <div> Previous Game Steps: {displayGames()}</div>
        <div>
            {(isActive() && getEnabled() == true) ? <CalcButtons updateWinners={props.updateWinners} name={props.user.userName} changeEnabeld={props.changeEnabeld} games={games} setgames={setgames} MAX_WIN_NUMBER={MAX_WIN_NUMBER} setplayers={props.setplayers} players={props.players} user={props.user} steps={steps} setsteps={setsteps}  number={number} setnumber={setnumber} /> : null}
            {!isActive() ? <OptionButton   games={games} user={props.user}   setplayers={props.setplayers}   RangeRandom={RangeRandom} name={props.user.userName}  setnumber={setnumber} players={props.players} setsteps={setsteps}   /> : null}
        </div>
    </>)
} export default Player