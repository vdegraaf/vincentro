import React, { useContext } from 'react';
import GameContext from '../../context/game/gameContext';
import Official from '../icons/Official'
import Circle from '../icons/Circle'
import CricketLogo from '../icons/CricketLogo'

const Type = () => {
  const gameContext = useContext(GameContext);
  const { setGameType, game } = gameContext;

  const chooseGame = e => {
    setGameType(e.currentTarget.dataset.value);    
  };
 
  return (
     <div className='typesContainer'>
       <div 
          data-value='501'
          onClick={chooseGame}
          className='gameTypeBtn'>
            <Circle className={game !== '501' ? 'radio-btn-inActive' : null} width='45px' />
            <Official className={game !== '501' ? 'radio-btn-inActive' : null} />
       </div>
       <div 
          data-value='Cricket'
          onClick={chooseGame}
          className='gameTypeBtn'>
          <Circle className={game !== 'Cricket' ? 'radio-btn-inActive' : null} width='45px' />
          <CricketLogo className={game !== 'Cricket' ? 'radio-btn-inActive' : null} />
       </div>
     </div>
    
  );
};

export default Type;
