import React, { useContext } from 'react';
import GameContext from '../../context/game/gameContext';

const Winner = () => {
  const gameContext = useContext(GameContext);
  const { winner, resetGame } = gameContext;

  return (
    <div className='popup'>
      <div className='popup__inner'>
        <div className='popup__text'>{winner.name} has won</div>
        <button onClick={() => resetGame()}>Play Again</button>
      </div>
    </div>
  );
};

export default Winner;
