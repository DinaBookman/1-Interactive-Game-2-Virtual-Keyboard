import { useState } from 'react'
import React from 'react'
import Players from '../Players/Players.jsx'
import TopGamers from '../TopGamers/TopGamers.jsx'
import "./Board.css"
function Board() {
  
    let set=[{ 'gamer': "", "average": Number.MAX_SAFE_INTEGER, 'active': false },{ "gamer": "", "average": Number.MAX_SAFE_INTEGER, 'active': false },{ "gamer": "", 'average': Number.MAX_SAFE_INTEGER, 'active': false }]
    let xc=getUpdateWinners()
    const [topGamers, settopGamers] = useState(xc)
 
    function getUpdateWinners()
    {
        let updateTopGamers =  set;
        for (var j = 0; j < localStorage.length; j++) {
            let userName = localStorage.key(j)
            let games = JSON.parse(localStorage.getItem(localStorage.key(j)))
            let sum = 0;
            games.map((game) => sum += game)

            let topGamer = { 'gamer': userName, 'average': sum / games.length, 'active': true }
            if (topGamer.average < updateTopGamers[0].average)
                updateTopGamers = [topGamer, updateTopGamers[0], updateTopGamers[1]]
            else if (sum / games.length < updateTopGamers[1].average)
                updateTopGamers = [updateTopGamers[0], topGamer, updateTopGamers[1]]
            else if (sum / games.length < updateTopGamers[2].average)
                updateTopGamers = [updateTopGamers[0], updateTopGamers[1], topGamer]
        }
        return updateTopGamers
    }
    const updateWinners = () => {
        // let updateTopGamers =  set;
        // for (var j = 0; j < localStorage.length; j++) {
        //     let userName = localStorage.key(j)
        //     let games = JSON.parse(localStorage.getItem(localStorage.key(j)))
        //     let sum = 0;
        //     games.map((game) => sum += game)

        //     let topGamer = { 'gamer': userName, 'average': sum / games.length, 'active': true }
        //     if (topGamer.average < updateTopGamers[0].average)
        //         updateTopGamers = [topGamer, updateTopGamers[0], updateTopGamers[1]]
        //     else if (sum / games.length < updateTopGamers[1].average)
        //         updateTopGamers = [updateTopGamers[0], topGamer, updateTopGamers[1]]
        //     else if (sum / games.length < updateTopGamers[2].average)
        //         updateTopGamers = [updateTopGamers[0], updateTopGamers[1], topGamer]
        // }
        let u=getUpdateWinners()
        settopGamers(u)
        console.log(topGamers);
    }
 
    return (<>
    <div className='game'>
    <TopGamers topGamers={topGamers}/>
        <h1>SCORE 100</h1>
    <Players   updateWinners={()=>updateWinners()} />
    </div>
       


    </>)
}
export default Board;