import React, { useContext, useEffect } from 'react';
import GameContext from '../../context/game/gameContext';

const Names = () => {
  const gameContext = useContext(GameContext);
  const { players, current, switchPlayer, game } = gameContext;
  
  useEffect(() => {
    
    
  }, [game])

  return (
    <div className='container container-names'>
      {players.map(player => {
        return (
          <div key={player.id} onClick={() => switchPlayer()}>
            <h2 className={player.id === current.id && game === '501' ? 'isPlaying' : ''} >{player.nickname}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Names;
