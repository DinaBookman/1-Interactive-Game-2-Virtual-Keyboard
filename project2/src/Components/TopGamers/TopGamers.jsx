import { useState } from 'react'
import React from 'react'
import { flushSync } from 'react-dom';


function TopGamers() {
    let topGamer1 = { 'gamer': "", 'average': 0, 'active': false }
    let topGamer2 = { 'gamer': "", 'average': 0, 'active': false }
    let topGamer3 = { 'gamer': "", 'average': 0, 'active': false }
    const [topGamers, settopGamers] = useState([topGamer1, topGamer2, topGamer3])
    let topGamersToUpdate=topGamers
    function getTopGamers() {
        //let topGamersToUpdate = topGamers
        for (var i = 0; i < localStorage.length; i++) {
            let userName = localStorage.key(i)
            let games = JSON.parse(localStorage.getItem(localStorage.key(i)))
            let sum = 0;
            games.map((game) => sum += game
            )
            let topGamer = { 'gamer': userName, 'average': sum / games.length, 'active': true }
            if (topGamer.average > topGamersToUpdate[0].average)
                topGamersToUpdate = [topGamer, topGamersToUpdate[0], topGamersToUpdate[1]]
            else if (sum / games.length > topGamersToUpdate[1].average)
                topGamersToUpdate = [topGamersToUpdate[0], topGamer, topGamersToUpdate[1]]
            else if (sum / games.length > topGamersToUpdate[2].average)
                topGamersToUpdate = [topGamersToUpdate[0], topGamersToUpdate[1], topGamer]
        }
    }
        flushSync(() => {
            settopGamers(topGamersToUpdate)
        });
    
    function displayTopGamers() {
        getTopGamers()
        let i = 0
        let allTopGamers = topGamers.map((topGamer) => {
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