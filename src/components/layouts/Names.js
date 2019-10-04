import React, { useContext } from 'react';
import GameContext from '../../context/game/gameContext';

const Names = () => {
  const gameContext = useContext(GameContext);

  const { players, current, game } = gameContext;

  return (
    <div className='container--names'>
      {players.map(player => {
        return (
          <div key={player.id} className='box box-m'>
            {player.name}
            {current.name === player.name && game === '501' ? (
              <i className='fas fa-star' />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Names;
