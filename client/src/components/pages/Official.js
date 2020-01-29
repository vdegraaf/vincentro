import React, { useContext, useEffect } from 'react';
import GameContext from '../../context/game/gameContext';

import Names from '../layouts/Names';
import Stats from '../official/Stats'
import AddScore from '../official/AddScore';
import TurnScore from '../official/TurnScore';
import TotalScore from '../official/TotalScore';
import Winner from '../official/Winner';
import FinishSuggestions from '../official/FinishSuggestions'

const Official = () => {
  const gameContext = useContext(GameContext);
  const { winner, switchPlayer, current, players } = gameContext;

  useEffect(() => {
    if(players.find(p => p.id !== current.id)) {
      switchPlayer()
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='container__official'>
      <Names />
      <Stats />
      <TurnScore />
      <TotalScore />
      {winner ? <Winner /> : <AddScore />}
      {/* <FinishSuggestions  />  */}
    </div>
  );
};

export default Official;
