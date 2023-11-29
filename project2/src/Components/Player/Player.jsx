import { useState } from 'react'
import React from 'react'
import OptionButton from '../OptionButton/OptionButton.jsx'

const MAX_WIN_NUMBER = 10
let RangeRandom=()=>Math.floor(Math.random() * MAX_WIN_NUMBER)
function Player(props) {
    const [start,setstart]=useState(false)
    const [steps, setsteps] = useState(0)
    const [number, setnumber] = useState(RangeRandom)
    let bb=(localStorage.getItem(props.userName)===null)
    let vv=( bb)?[]:localStorage.getItem(props.userName).games
    const [games, setgames] = useState(vv)
    // function set() {
    //     let x=localStorage.getItem(props.userName) 
    //     if (x==null)
    //         return ([])
    //     return (localStorage.getItem(props.userName).games)
    // }

    function calc(func) {
        setsteps(steps + 1)
        let newNum;
        switch (func) {
            case '*2':
                {
                    newNum = number * 2
                }
                break;
            case '/2':
                {
                    newNum = parseInt(number / 2)
                }
                break;
            case '+1':
                {
                    newNum = number + 1
                }
                break;
            case '-1':
                {
                    newNum = number - 1
                }
                break;
        }
        setnumber(newNum)
        if (newNum == MAX_WIN_NUMBER) {
            let comma="";
            if(games.length>=2)
                    comma=","
            setgames([...games,comma, steps+1 ])   
            setstart(true)
        }
    }
   
    return (<>
        <div>{"gamer name: "} {props.userName}</div>
        <div>{'press buttons to reach 100: '}{number}</div>
        <div> {'steps: '}{steps}</div>
        <div> {'Previous Game Steps: '}{...games}</div>
        <div>
            <button onClick={() => calc('*2')}>{'*2'}</button>
            <button onClick={() => calc('/2')}>{'/2'}</button>
            <button onClick={() => calc('+1')}>{'+1'}</button>
            <button onClick={() => calc('-1')}>{'-1'}</button>
           {start?<OptionButton name={props.userName} games={games} setnumber={setnumber} players={props.players} setsteps={setsteps} setplayers={props.setplayers}/>:null}
        </div>
    </>)
} export default Player