import React, { useContext } from 'react';
import GameContext from '../../context/game/gameContext';
import Names from '../layouts/Names';
import AddScore from '../official/AddScore';
import TurnScore from '../official/TurnScore';
import TotalScore from '../official/TotalScore';
import Winner from '../official/Winner';

const Official = () => {
  const gameContext = useContext(GameContext);
  const { winner } = gameContext;

  return (
    <div className='container'>
      <h1 className='subtitle'>Official darts: 501</h1>
      <Names />
      <TurnScore />
      <TotalScore />
      {winner ? <Winner /> : <AddScore />}
    </div>
  );
};

export default Official;
