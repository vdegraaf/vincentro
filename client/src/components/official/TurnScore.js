import React, { useContext } from 'react';
import OfficialContext from '../../context/official/officialContext';

const TurnScore = () => {
  const officialContext = useContext(OfficialContext);
  let { players } = officialContext;
  
  return ( <div className='turnScore-container'>  
    {
      players.map(player => (<div className='turnScore-score' key={player.id}>
            {player.turnScore.slice(0).reverse().map((score, index) => <h3 className={index === (player.turnScore.length -1) ? 'appearBig' : ''} key={index} >{score}</h3>)}
          </div>)
      )
    }
  </div>)
};

export default TurnScore;
