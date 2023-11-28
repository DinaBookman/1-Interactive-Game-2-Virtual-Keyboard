import { useState } from 'react'
import React from 'react'

function Player(props) {
    const MAX_WIN_NUMBER = 100
    const [steps, setsteps] = useState(0)
    const [number, setnumber] = useState(Math.floor(Math.random() * MAX_WIN_NUMBER))
    const [games, setgames] = useState(set())
    function set() {
        if (localStorage.getItem('players') == null )
            return ([])
        return (localStorage.getItem('players')[props.name])
    }

function calc(func) {
    setsteps(steps + 1)
    let newNum;
    switch (func) {
        case '*2':
            {
                newNum=number * 2
            }
            break;
        case '/2':
            {
                newNum=parseInt(number / 2)
            }
            break;
        case '+1':
            {
                newNum=number + 1
            }
            break;
        case '-1':
            {
                newNum=number - 1
            }
            break;
        //default:
    }
    setnumber(newNum)
    if (newNum == MAX_WIN_NUMBER) {
        setgames([...games,steps])
        
    }
}
return (<>
    <div>{"gamer name: "} {props.name}</div>
    <div>{'press buttons to reach 100: '}{number}</div>
    <div> {'steps: '}{steps}</div>
    <div> {'Previous Game Steps: '}{...games}</div>
    <div>
        <button onClick={() => calc('*2')}>{'*2'}</button>
        <button onClick={() => calc('/2')}>{'/2'}</button>
        <button onClick={() => calc('+1')}>{'+1'}</button>
        <button onClick={() => calc('-1')}>{'-1'}</button>
        <button onClick={() => newGame()}>{'Start new Game'}</button>
        <button onClick={() => Exit()}>{'Exit'}</button>
    </div>
</>)
} export default Player