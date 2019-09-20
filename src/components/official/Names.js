import React, { useContext, Fragment } from 'react';
import GameContext from '../../context/game/gameContext';

const Names = () => {
  const gameContext = useContext(GameContext);

  const { players, current } = gameContext;

  return (
    <Fragment>
      <ul>
        <li>
          {players.playerOne}
          {current === players.playerOne ? <i class='fas fa-star' /> : null}
        </li>
        <li>
          {players.playerTwo}
          {current === players.playerTwo ? <i class='fas fa-star' /> : null}
        </li>
      </ul>
    </Fragment>
  );
};

export default Names;
