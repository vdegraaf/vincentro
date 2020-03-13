import React, { useContext } from 'react';
import GameContext from '../../context/game/gameContext';
import OfficialContext from '../../context/official/officialContext';

function Warning({message}) {
  const gameContext = useContext(GameContext);
  const officialContext = useContext(OfficialContext);

  return (
    <div className='warning'>
      <div className="warning-inner">
      {message}
      </div>
    </div>
  );
}

export default Warning;
