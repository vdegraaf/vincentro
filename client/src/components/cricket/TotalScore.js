import React, { useContext, useEffect } from 'react';
import CricketContext from '../../context/cricket/cricketContext';

const TotalScore = ({ id }) => {
  const cricketContext = useContext(CricketContext);
  const { players, updateTotalScore } = cricketContext;
  // const { scores, totalScore } = players.find(player => player.id === id);
  // const totalScore = players.find(player => player.id === id).totalScore;

  useEffect(() => {
    // updateTotalScore(id);

      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container container-totalScore">
    {players.map(player => {
      return <h3>{player.totalScore}</h3>
    })}
    </div>
  )
};

export default TotalScore;
