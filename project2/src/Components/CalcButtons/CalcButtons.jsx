import { lazy, useState } from 'react'
import React from 'react'
function CalcButtons(props) {
  
    function calc(func) {
        props.changeEnabeld(props.name)
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
      
        props.setnumber(newNum)

        if (newNum == props.MAX_WIN_NUMBER) {
            // let comma="";
            // if(games.length>=2)
            //         comma=","
            props.setgames([...props.games, props.steps + 1])
            props.setstart(true)
            props.changePlayerToPassive(props.name)
        }
    }
    return (<>  <button onClick={() => calc('*2')}>{'*2'}</button>
        <button onClick={() => calc('/2')}>{'/2'}</button>
        <button onClick={() => calc('+1')}>{'+1'}</button>
        <button onClick={() => calc('-1')}>{'-1'}</button></>)

} export default CalcButtons