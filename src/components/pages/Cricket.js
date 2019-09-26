import React from 'react';
import Names from '../layouts/Names';
import ScoreContainer from '../cricket/ScoreContainer';
import Numbers from '../cricket/Numbers';
import TotalScore from '../cricket/TotalScore';

const Cricket = () => {
  return (
    <div>
      <Names />

      <div className='mainContainer'>
        <div className='sideContainer'>
          <TotalScore id={1} />
          <ScoreContainer id={1} />
        </div>

        <Numbers />

        <div className='sideContainer'>
          <TotalScore id={2} />
          <ScoreContainer id={2} />
        </div>
      </div>
    </div>
  );
};

export default Cricket;
