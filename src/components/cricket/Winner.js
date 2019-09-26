import React, { useContext } from 'react';
import GameContext from '../../context/game/gameContext';
import CricketContext from '../../context/cricket/cricketContext';

const Winner = ({ id }) => {
  const gameContext = useContext(GameContext);
  const cricketContext = useContext(CricketContext);

  const { players } = gameContext;
  const winner = players.find(player => player.id === id).name;
  const { resetGame } = cricketContext;

  return (
    <div>
      <div>{winner} has won</div>
      <button onClick={() => resetGame()}>Play Again</button>
    </div>
  );
};

export default Winner;
