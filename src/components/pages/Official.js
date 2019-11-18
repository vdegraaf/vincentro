import React, { useContext } from 'react';
import GameContext from '../../context/game/gameContext';
import Names from '../layouts/Names';
import AddScore from '../official/AddScore';
import TurnScore from '../official/TurnScore';
import TotalScore from '../official/TotalScore';
import Winner from '../official/Winner';
import FinishSuggestions from '../../components/official/FinishSuggestions';

const Official = () => {
  const gameContext = useContext(GameContext);
  const { winner } = gameContext;

  return (
    <div className='container__official'>
      <Names />
      <TurnScore />
      <TotalScore />
      <FinishSuggestions />
      {winner ? <Winner /> : <AddScore />}
    </div>
  );
};

export default Official;
