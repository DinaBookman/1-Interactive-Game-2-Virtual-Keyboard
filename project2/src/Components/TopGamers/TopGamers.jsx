import { useState } from 'react'
import React from 'react'
import { flushSync } from 'react-dom';


function TopGamers(props) {
   
    function displayTopGamers(topGamers) {
       
        let i = 0
        let allTopGamers =  topGamers.map((topGamer, key) => {
            i++
            return (topGamer.active&&<div key={key}>Top Gamer #{i} is { topGamer.gamer} with an average of: {parseInt(topGamer.average)}</div>)})
        return allTopGamers

    }
    
    return (<>
        {displayTopGamers(props.topGamers)}
    </>)
}

export default TopGamers