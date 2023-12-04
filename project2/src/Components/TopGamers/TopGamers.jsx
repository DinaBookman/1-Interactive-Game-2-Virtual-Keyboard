import { useState } from 'react'
import React from 'react'
 


function TopGamers() {
    let set=[{ 'gamer': "", 'average': 0, 'active': false },{ 'gamer': "", 'average': 0, 'active': false },{ 'gamer': "", 'average': 0, 'active': false }]
   const [topGamers, settopGamers] = useState(set)
   
    for (var i = 0; i < localStorage.length; i++) {
            let userName = localStorage.key(i)
            let games = JSON.parse(localStorage.getItem(localStorage.key(i)))
            let sum = 0;
            games.map((game) => sum += game)
            let topGamer = { 'gamer': userName, 'average': sum / games.length, 'active': true }
            if (topGamer.average > topGamers[0].average)
            settopGamers(topGamer, topGamers[0], topGamers[1])
            else if (sum / games.length > topGamers[1].average)
            settopGamers(topGamers[0], topGamer, topGamers[1])
            else if (sum / games.length > topGamers[2].average)
            settopGamers(topGamers [0], topGamers [1], topGamer)
        }
    
         
    
    function displayTopGamers() {
        
        let i = 0
        let allTopGamers = ()=> topGamers.map((topGamer) => {
            i++
            return (
                topGamer.active && <div>Top Gamer #{i} is {topGamer.gamer} with an average of: {parseInt(topGamer.average)}</div>)
        })
        return allTopGamers
    }
    return (<>
        {displayTopGamers()}
    </>)
}

export default TopGamers