import React, { useContext, Fragment } from 'react';
import GameContext from '../../context/game/gameContext';

const Names = () => {
  const gameContext = useContext(GameContext);

  const { players, current } = gameContext;

  return (
    <Fragment>
      <ul>
        {players.map(player => {
          return (
            <li key={player.id}>
              {player.name}
              {current.name === player.name ? (
                <i className='fas fa-star' />
              ) : null}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default Names;
