import React from 'react';
import Names from '../layouts/Names';
import ScoreContainer from '../cricket/ScoreContainer';
import Numbers from '../cricket/Numbers';

const Cricket = () => {
  return (
    <div>
      <Names />
      <div className='mainContainer'>
        <div className='sideContainer'>
          <ScoreContainer id={1} />
        </div>

        <Numbers />

        <div className='sideContainer'>
          <ScoreContainer id={2} />
        </div>
      </div>
    </div>
  );
};

export default Cricket;
