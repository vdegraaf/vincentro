import React, { useContext } from 'react';
import OfficialContext from '../../context/official/officialContext';
import getAvg from '../utilities/getAverage'

const Stats = () => {
  const officialContext = useContext(OfficialContext);
  const { players } = officialContext
  
  return ( <div className="stats-wrapper"> 
    {players.map(player => {
    return (
      <div className='stats' key={player.id}>
        <span className='stats__item'>
          <h4>{getAvg(player.turnScore)} | {player.turnScore.length * 3}</h4>
        </span>  
      </div>
    )
    })}
  </div>)
};

export default Stats;
