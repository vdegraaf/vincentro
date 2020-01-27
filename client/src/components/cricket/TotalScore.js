import React, { useContext, useEffect } from 'react';
import CricketContext from '../../context/cricket/cricketContext';

const TotalScore = ({ id }) => {
  const cricketContext = useContext(CricketContext);
  const { players, updateTotalScore } = cricketContext;
  // const { scores, totalScore } = players.find(player => player.id === id);
  // const totalScore = players.find(player => player.id === id).totalScore;
// console.log('scores',scores)
//   useEffect(() => {
//     updateTotalScore(id);

//       // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [scores]);

  return (
    <div className="container container-totalScore">
    {players.map(player => {
      return <div>{player.totalScore}</div>
    })}
    </div>
  )
};

export default TotalScore;
