import { lazy, useState } from 'react'
import React from 'react'
function CalcButtons(props) {
    function changeEnabeld() {
        let newArryPlayers = []
        for (let i = 0; i < props.players.length; i++) {
            if (props.players[i].userName == props.user.userName) {
                props.players[i].enabled = false
                newArryPlayers.push(props.players[i])
                if(i==props.players.length-1)
               { newArryPlayers[0].enabled=true
                break;
               }
                props.players[i + 1].enabled = true;
                newArryPlayers.push(props.players[i + 1])
                for (let j = i + 2; j < props.players.length; j++)
                    newArryPlayers.push(props.players[j])
                break;
            }
            newArryPlayers.push(props.players[i])
        }
        props.setplayers(newArryPlayers)
    }
    function calc(func) {
        props.setsteps(props.steps + 1)
        let newNum;
        switch (func) {
            case '*2':
                {
                    newNum = props.number * 2
                }
                break;
            case '/2':
                {
                    newNum = parseInt(props.number / 2)
                }
                break;
            case '+1':
                {
                    newNum = props.number + 1
                }
                break;
            case '-1':
                {
                    newNum = props.number - 1
                }
                break;
        }
        changeEnabeld()
        props.setnumber(newNum)

        if (newNum == props.MAX_WIN_NUMBER) {
            // let comma="";
            // if(games.length>=2)
            //         comma=","
            props.setgames([...props.games, props.steps + 1])
            props.setstart(true)
        }
    }
    return (<>  <button onClick={() => calc('*2')}>{'*2'}</button>
        <button onClick={() => calc('/2')}>{'/2'}</button>
        <button onClick={() => calc('+1')}>{'+1'}</button>
        <button onClick={() => calc('-1')}>{'-1'}</button></>)

} export default CalcButtons