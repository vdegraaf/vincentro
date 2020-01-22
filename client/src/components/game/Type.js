import React, { useContext } from 'react';
import GameContext from '../../context/game/gameContext';
import Official from '../icons/Official'
import Circle from '../icons/Circle'
import CricketLogo from '../icons/CricketLogo'

const Type = () => {
  const gameContext = useContext(GameContext);
  const { setGameType } = gameContext;

  const chooseGame = e => {
    setGameType(e.currentTarget.dataset.value);
  };

  return (
    <div className='container container--radio'>
     <div>
       <div 
          data-value='501'
          onClick={chooseGame}>
            <Circle />
            <Official />
       </div>
       <div 
        data-value='Cricket'
        onClick={chooseGame}
        >
          <Circle />
          <CricketLogo />
       </div>
     </div>
    </div>
  );
};

export default Type;
