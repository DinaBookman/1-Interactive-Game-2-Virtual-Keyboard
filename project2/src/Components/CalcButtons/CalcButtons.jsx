import React from 'react'
import "./CalcButtons.css"
function CalcButtons(props) {
  
    function calc(func) {
        let updateArrayPlayers=props.changeEnabeld(props.name)
        props.setsteps((prevSteps)=>prevSteps+1)
        let newNum;
        switch (func) {
            case '*2':
                    newNum = props.number * 2
                break;
            case '/2':
                    newNum = parseInt(props.number / 2)
                break;
            case '+1':
                    newNum = props.number + 1
                break;
            case '-1':
                    newNum = props.number - 1
                break;
        }
        
        props.setnumber(newNum);
        if (newNum === props.MAX_WIN_NUMBER) {
            
            let newArrayGames=[...props.games,props.steps+1];
            props.setgames(newArrayGames);
            localStorage.removeItem(props.name);
            localStorage.setItem(props.name, JSON.stringify(newArrayGames));
            props.updateWinners();
            unActivate(updateArrayPlayers)
            
        }
         
       
    }

    let unActivate=(array)=>{
        let newArray=[];
        for (let i = 0; i < array.length; i++) 
        if (array[i].userName === props.name)
                newArray.push({ 'userName':array[i].userName, 'active':  false , 'enabled' : false,'games':array[i].games})
        else
            newArray.push(array[i])
        props.setplayers(newArray) 
    }
    return (<>
         
        <button  className='calcButton' itemID='b1' onClick={() => calc('*2')}>{'*2'}</button>
        <button  className='calcButton' itemID='b2' onClick={() => calc('/2')}>{'/2'}</button>
        <button  className='calcButton' itemID='b3' onClick={() => calc('+1')}>{'+1'}</button>
        <button  className='calcButton' itemID='b4' onClick={() => calc('-1')}>{'-1'}</button>
        </>)

} export default CalcButtons