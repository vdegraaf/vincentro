import React, { useContext, useEffect } from 'react';
import Names from '../official/Names';
import GameContext from '../../context/game/gameContext';
import OfficialContext from '../../context/official/officialContext';

const Official = () => {
  const gameContext = useContext(GameContext);
  const officialContext = useContext(OfficialContext);

  // const { setNames } = officialContext;

  const { players } = gameContext;

  const { setNames } = officialContext;

  useEffect(() => {
    setNames(players);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Official darts: 501</h1>
      <Names />
    </div>
  );
};

export default Official;
