import React, { useContext, useEffect } from 'react';
import CricketContext from '../../context/cricket/cricketContext';

const TotalScore = ({ id }) => {
  const cricketContext = useContext(CricketContext);
  const { players, updateTotalScore } = cricketContext;
  const { scores, totalScore } = players.find(player => player.id === id);

  useEffect(() => {
    updateTotalScore(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scores]);

  return (
    <div className="totalScore">
      <h3>{totalScore}</h3>
    </div>
  );
};

export default TotalScore;
