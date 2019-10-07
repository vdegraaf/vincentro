import React, { useContext, useEffect } from 'react';
import OfficialContext from '../../context/official/officialContext';
import GameContext from '../../context/game/gameContext';

const TotalScore = () => {
  const officialContext = useContext(OfficialContext);
  const gameContext = useContext(GameContext);

  const { players, updateTotalScore } = officialContext;
  const { current } = gameContext;
  const lastId = current.id === 1 ? 2 : 1;
  const { turnScore } = players[lastId === 1 ? 0 : 1];

  useEffect(() => {
    if (turnScore.length > 0) {
      updateTotalScore(lastId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turnScore]);

  return (
    <div className='container-l container-l--absolute'>
      {players.map(player => {
        return (
          <div className='container-m'>
            <h2>playerID: {player.id}</h2>
            {player.totalScore
              .slice(0)
              .reverse()
              .map((points, index) => {
                return (
                  <div key={index} className='box box-s'>
                    {points}
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

export default TotalScore;
