import { lazy, useState } from 'react'
import React from 'react'


function OptionButton(props) {
    function newGame() {
        props.setnumber(props.RangeRandom)
        props.setsteps(0)
        props.setstart(false)
        props.changePlayerToActive(props.name)
    }

    function exit() {
        localStorage.removeItem(props.name)
        let profile = props.games
        localStorage.setItem(props.name, profile)
        props.removeItemFromPassivePlayers(props.name)
    }
    return (
        <><button onClick={() => newGame()}>{'Start new Game'}</button>
            <button onClick={() => exit()}>{'Exit'}</button></>)
}
export default OptionButton;
