import React, { useContext, useEffect } from 'react';
import GameContext from '../../context/game/gameContext';
import Names from '../layouts/Names';
import AddScore from '../official/AddScore';
import TurnScore from '../official/TurnScore';
import TotalScore from '../official/TotalScore';
import Winner from '../official/Winner';

const Official = () => {
  const gameContext = useContext(GameContext);
  const { winner, switchPlayer } = gameContext;

  useEffect(() => {
    switchPlayer();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='container__official'>
      <Names />
      <TurnScore />
      <TotalScore />
      {winner ? <Winner /> : <AddScore />}
    </div>
  );
};

export default Official;
