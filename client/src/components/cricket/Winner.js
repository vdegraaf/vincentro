import React, { useContext } from 'react';
import GameContext from '../../context/game/gameContext';
import CricketContext from '../../context/cricket/cricketContext';

const Winner = ({ id }) => {
  const gameContext = useContext(GameContext);
  const cricketContext = useContext(CricketContext);

  const winner = gameContext.players
    .find(player => player.id === id)
    .name.toUpperCase();

  const {
    resetGame,
    players: [p1, p2]
  } = cricketContext;
  const scoreDiff = Math.abs(p1.totalScore - p2.totalScore);

  return (
    <div className='popup'>
      <div className='popup__inner'>
        <div className='popup__text'>
          <b>{winner}</b> has won with <h2>{scoreDiff}</h2>
        </div>
        <button className='popup__button' onClick={() => resetGame()}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Winner;
