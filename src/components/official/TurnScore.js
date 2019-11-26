import React, { useContext } from 'react';
import OfficialContext from '../../context/official/officialContext';
import GameContext from '../../context/game/gameContext';

const TurnScore = () => {
  const officialContext = useContext(OfficialContext);
  const gameContext = useContext(GameContext);
  let { players } = officialContext;
  const { current } = gameContext;

  return (
    <div className='container-l'>
      {players.map(player => {
        return (
          <div
            className={`container-m container-m--turn ${
              current.id === player.id ? `turn` : null
            }`}
          >
            {player.turnScore
              .slice(0)
              .reverse()
              .map((points, index) => {
                if(points === 0 ) {
                  points = "-"
                }
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

export default TurnScore;
