import React, { useContext, useEffect, Fragment } from 'react';
import OfficialContext from '../../context/official/officialContext';
import GameContext from '../../context/game/gameContext';

const TotalScore = () => {
  const officialContext = useContext(OfficialContext);
  const gameContext = useContext(GameContext);

  const { players, updateTotalScore } = officialContext;
  const { current } = gameContext;
  console.log(current, 'CURRENT');
  const { turnScore } = players[0];

  useEffect(() => {
    if (turnScore.length > 0) {
      updateTotalScore(1);
    }
  }, [turnScore]);

  return (
    <div className='listContainer'>
      {players.map(player => {
        return (
          <>
            <h2>playerID: {player.id}</h2>
            {player.totalScore.map((points, index) => {
              return (
                <div key={index} className='scoreList'>
                  {points}
                </div>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export default TotalScore;
