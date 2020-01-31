import React, { useContext } from 'react';
import CricketContext from '../../context/cricket/cricketContext';
import ScoreBlock from './ScoreBlock';

const ScoreContainer = ({ id, position }) => {
  const cricketContext = useContext(CricketContext);
  const { players } = cricketContext;
  const player = players.find(player => player.id === id);

  return (
    <div className="container__three">
      {player.scores.map(s => {
        return <ScoreBlock id={id} number={s.key} position={position} key={s.key.toString()} />;
      })}
    </div>
  );
};

export default ScoreContainer;
