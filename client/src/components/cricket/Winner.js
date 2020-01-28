import React, { useContext } from 'react';
import GameContext from '../../context/game/gameContext';
import CricketContext from '../../context/cricket/cricketContext';
import Cup from '../../components/icons/Cup';
import Circle from '../icons/Circle';

const Winner = ({ id }) => {
  const gameContext = useContext(GameContext);
  const cricketContext = useContext(CricketContext);

  const winner = gameContext.players
    .find(player => player.id === id)
    .nickname;

  const {
    resetGame,
    players: [p1, p2]
  } = cricketContext;
  const scoreDiff = Math.abs(p1.totalScore - p2.totalScore);

  return (
    <div className='popup'>
      <div className='popup__inner'>
        <Cup />
        <h2><span className="orange">{winner}</span> has won with <span className="orange">{scoreDiff}</span> points!</h2>
      </div>
      <div onClick={() => resetGame()} className="popup__revange">
        <Circle className="popup__revange-svg" />
        <h3>Revenge</h3>
      </div>
    </div>
  );
};

export default Winner;
