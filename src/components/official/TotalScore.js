import React, { useContext, useEffect, Fragment } from 'react';
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
