 
import React from 'react'
 
function CalcButtons(props) {
  
    function calc(func) {
        props.changeEnabeld(props.name)
        props.setsteps((prevSteps)=>prevSteps+1)
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
         
        props.setnumber(newNum);
        if (newNum === props.MAX_WIN_NUMBER) {
            let newArrayGames=[...props.games,props.steps+1];
            props.setgames(newArrayGames);
            props.changePlayerToPassive(props.name,newArrayGames);
            localStorage.removeItem(props.name);
           // let profile = props.games;
            localStorage.setItem(props.name, JSON.stringify(newArrayGames));
            props.updateWinners();

        }
    }
    return (<><button onClick={() => calc('*2')}>{'*2'}</button>
        <button onClick={() => calc('/2')}>{'/2'}</button>
        <button onClick={() => calc('+1')}>{'+1'}</button>
        <button onClick={() => calc('-1')}>{'-1'}</button></>)

} export default CalcButtons