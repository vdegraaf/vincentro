import React, { useContext, useEffect } from 'react';
import OfficialContext from '../../context/official/officialContext';
import GameContext from '../../context/game/gameContext';
import FinishSuggestions from '../../components/official/FinishSuggestions';

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

  const getAvg = (array) => {

    if(array.length === 0) {

      return 0
    }

    const newArr = array.map(item => {
      return parseInt(item)
    })

    const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
    
    return Math.round(arrAvg(newArr))

  }


  return (
    <div>
      <div className='container-l container-l--absolute'>
        {players.map(player => {

          return (
            <div
              className={`container-m ${
                current.id === player.id ? `turn` : null
              }`}
            >
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
              <div>
                <FinishSuggestions totalScore={player.totalScore[0]} />
                <div>
                  <span>average: {
                    getAvg(player.turnScore)
                    }</span>
                  <span>darts: {player.turnScore.length * 3}
                  </span>
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TotalScore;
