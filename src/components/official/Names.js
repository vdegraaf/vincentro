import React, { useContext, Fragment } from 'react';
import GameContext from '../../context/game/gameContext';

const Names = () => {
  const gameContext = useContext(GameContext);

  const { players, current } = gameContext;

  return (
    <div className='container-name'>
      {players.map(player => {
        return (
          <div key={player.id} className='box box-m'>
            {player.name}
            {current.name === player.name ? (
              <i className='fas fa-star' />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Names;
