import { useState } from 'react'
import React from 'react'
import { flushSync } from 'react-dom';


function TopGamers() {
    //let set=[{ 'gamer': "", "average": 0, 'active': false },{ "gamer": "", "average": 0, 'active': false },{ "gamer": "", 'average': 0, 'active': false }]
   const [topGamers, settopGamers] = useState([{"average": 0},{"average": 0},{"average": 0}])
   function updateWinners(){
    let updateTopGamers=topGamers
    for (var i = 0; i < localStorage.length; i++) {
            let userName = localStorage.key(i)
            let games = JSON.parse(localStorage.getItem(localStorage.key(i)))
            let sum = 0;
            games.map((game) => sum += game)
            
            let topGamer = { 'gamer': userName, 'average': sum / games.length, 'active': true }
            if (topGamer.average > updateTopGamers[0].average)
               updateTopGamers=[topGamer, updateTopGamers[0], updateTopGamers[1]]
            else if (sum / games.length > updateTopGamers[1].average)
                updateTopGamers=[updateTopGamers[0], topGamer, updateTopGamers[1]]
            else if (sum / games.length > updateTopGamers[2].average)
               updateTopGamers=[updateTopGamers[0], updateTopGamers [1], topGamer] 
          
        }
        settopGamers(updateTopGamers)
        console.log(topGamers);
   }
         
    
    function displayTopGamers() {
        updateWinners()
        let i = 0
        let allTopGamers = ()=> topGamers.map((topGamer) => {
            i++
            return (
                /*topGamer.active && */<div>Top Gamer #{i} is {topGamer.gamer} with an average of: {parseInt(topGamer.average)}</div>)
        })
        return allTopGamers
    }
    return (<>
        {displayTopGamers()}
    </>)
}

export default TopGamers