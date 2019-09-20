import React, { useContext } from 'react';
import OfficialContext from '../../context/official/officialContext';

const TurnScore = () => {
  const officialContext = useContext(OfficialContext);
  const { players } = officialContext;

  return (
    <div className='listContainer'>
      {players.map(player => {
        return (
          <>
            <h2>playerID{player.id}</h2>
            {player.turnScore.map((points, index) => {
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

export default TurnScore;
