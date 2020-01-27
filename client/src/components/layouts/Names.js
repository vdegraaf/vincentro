import React, { useContext } from 'react';
import GameContext from '../../context/game/gameContext';

const Names = () => {
  const gameContext = useContext(GameContext);
  const { players, current, switchPlayer } = gameContext;

  return (
    <div className='container container-names'>
      {players.map(player => {
        return (
          <div key={player.id} onClick={() => switchPlayer()}>
            <h2 className={player.id === current.id ? 'isPlaying' : ''} >{player.nickname}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Names;
