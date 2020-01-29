
import React, { useContext, useEffect } from 'react';
import OfficialContext from '../../context/official/officialContext';
import GameContext from '../../context/game/gameContext';

const TotalScore = () => {
  const officialContext = useContext(OfficialContext);
  const gameContext = useContext(GameContext);

  const { players, updateTotalScore } = officialContext;
  const { current } = gameContext;
  const lastId = current.id === 1 ? 2 : 1;
  const { turnScore, totalScore } = players[lastId === 1 ? 0 : 1];

  useEffect(() => {
    if (turnScore.length > 0) {
      if (totalScore.length - 1 === turnScore.length) {
        return;
      } else updateTotalScore(lastId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turnScore]);


  return (
    <div className='turnScore-container'>
          {players.map((player, index) => {
            return (
              <h3 className='turnScore-score total' key={index}>
                {player.totalScore[0]}    
              </h3>
            );
          })}
    </div>
  );
};

export default TotalScore;
