import React, { useContext, useEffect, useState } from 'react';
import CricketContext from '../../context/cricket/cricketContext';
import GameContext from '../../context/game/gameContext'
import Names from '../layouts/Names';
import ScoreContainer from '../cricket/ScoreContainer';
import Numbers from '../cricket/Numbers';
import TotalScore from '../cricket/TotalScore';
import Winner from '../cricket/Winner';

const Cricket = () => {
  const cricketContext = useContext(CricketContext);
  const gameContext = useContext(GameContext)
  const { winnerCheck, players } = cricketContext;
  const [winner, setWinner] = useState(null);
  const gamePlayers = gameContext.players
  
  useEffect(() => {
    setWinner(winnerCheck());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [players]);

  return (
    <div className='container__cricket'>
      
      {winner && <Winner id={winner} />}
      <Names />
      <TotalScore id={gamePlayers[0].id} />
      <TotalScore id={gamePlayers[1].id} />
      <div className="container__score">
        <ScoreContainer id={gamePlayers[0].id} />
        <Numbers />
        <ScoreContainer id={gamePlayers[1].id}/>
      </div>
    </div>
  );
};

export default Cricket;
