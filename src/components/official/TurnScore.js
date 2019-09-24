import React, { useContext } from 'react';
import OfficialContext from '../../context/official/officialContext';

const TurnScore = () => {
  const officialContext = useContext(OfficialContext);
  let { players } = officialContext;

  return (
    <div className='container-l'>
      {players.map(player => {
        return (
          <div className='container-m'>
            <h2 key={player.id}>playerID{player.id}</h2>
            {player.turnScore
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

export default TurnScore;
