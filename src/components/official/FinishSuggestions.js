import React, {useContext} from 'react'
import OfficialContext from '../../context/official/officialContext'
import GameContext from '../../context/game/gameContext'
import possibleFinishes from './FinishSuggestionsData'

function FinishSuggestions() {
  const officialContext = useContext(OfficialContext);
  const gameContext = useContext(GameContext);
  let { players } = officialContext;
  const { current } = gameContext;
  
  let possibleFinish

  players.forEach(player => {
    let currentPlayerScore
    
    if(player.id === current.id) {
      
      currentPlayerScore = player.totalScore[0]
    }

    if(possibleFinishes[currentPlayerScore]) {
      possibleFinish = possibleFinishes[currentPlayerScore]
    }

  })



  return (
    <div className="finish">
      {possibleFinish}
    </div>
  )
}



export default FinishSuggestions
