import React, { useContext, useEffect, useState } from 'react';
import CricketContext from '../../context/cricket/cricketContext';
import Names from '../layouts/Names';
import ScoreContainer from '../cricket/ScoreContainer';
import Numbers from '../cricket/Numbers';
import TotalScore from '../cricket/TotalScore';
import Winner from '../cricket/Winner';

const Cricket = () => {
  const cricketContext = useContext(CricketContext);
  const { winnerCheck, players } = cricketContext;
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    setWinner(winnerCheck());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [players]);

  return (
    <div className='container__cricket'>
      {winner && <Winner id={winner} />}
      <Names />
      <TotalScore />
      {/* <div className='mainContainer'>
        <div className='sideContainer'>
          <TotalScore id={1} />
          <ScoreContainer id={1} />
        </div>

        <Numbers />

        <div className='sideContainer'>
          <TotalScore id={2} />
          <ScoreContainer id={2} />
        </div>
      </div> */}
    </div>
  );
};

export default Cricket;
