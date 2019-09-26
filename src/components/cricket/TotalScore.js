import React, { useContext, useEffect } from 'react';
import CricketContext from '../../context/cricket/cricketContext';

const TotalScore = ({ id }) => {
  const cricketContext = useContext(CricketContext);
  const { players, updateTotalScore } = cricketContext;
  const scores = players.find(player => player.id === id).scores;
  const totalScore = players.find(player => player.id === id).totalScore;

  useEffect(() => {
    updateTotalScore(id);
  }, [scores]);

  return <div>{totalScore}</div>;
};

export default TotalScore;
