import React, { useContext } from 'react';
import GameContext from '../../context/game/gameContext';

const Winner = () => {
  const gameContext = useContext(GameContext);
  const { winner, resetGame } = gameContext;

  return (
    <div>
      <div>{winner.name} has won</div>
      <button onClick={() => resetGame()}>Play Again</button>
    </div>
  );
};

export default Winner;
