import React, { useContext, useEffect } from 'react';
import Names from '../official/Names';
import AddScore from '../official/AddScore';
import GameContext from '../../context/game/gameContext';
import OfficialContext from '../../context/official/officialContext';

const Official = () => {
  const gameContext = useContext(GameContext);
  const officialContext = useContext(OfficialContext);

  const { players } = gameContext;

  return (
    <div>
      <h1>Official darts: 501</h1>
      <Names />
      <AddScore />
    </div>
  );
};

export default Official;
