import React, { useContext } from 'react';
import GameContext from '../../context/game/gameContext';
import OfficialContext from '../../context/official/officialContext'
import Cup from '../../components/icons/Cup'
import Circle from '../icons/Circle'
import Official from '../pages/Official';
import getAvg from '../utilities/getAverage'

const Winner = () => {
  const gameContext = useContext(GameContext);
  const { winner, resetGame } = gameContext;
  const officialContext = useContext(OfficialContext)
  const { players } = officialContext
  const winnerStats = players.find(p => p.id === winner.id)
  const loserStats = players.find(p => p.id !== winner.id)
  
  console.log('players', players)
  console.log('player', winnerStats)
  
  
  
  return (
    <div className='popup'>
      <div className='popup__inner'>
        <Cup />
        <h2><span className="orange">{winner.nickname}</span> has won with <span className="orange">{loserStats.totalScore[0]}</span> points!</h2>
        <h4 className="dark">Average: <span className="orange">{getAvg(winnerStats.turnScore)}</span> - Darts: <span className="orange">{winnerStats.turnScore.length *3}</span></h4>
      </div>
      <div onClick={() => resetGame()} className="popup__revange">
        <Circle className="popup__revange-svg" />
        <h3>Revenge</h3>
      </div>
    </div>
  );
};

export default Winner;
