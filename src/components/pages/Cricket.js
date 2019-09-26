import React from 'react';
import Names from '../layouts/Names';
import ScoreContainer from '../cricket/ScoreContainer';

const Cricket = () => {
  return (
    <div>
      <Names />
      <div className='mainContainer'>
        <div className='sideContainer'>
          <ScoreContainer id={1} />
        </div>
        <div className='numberContainer'>Numbers</div>
        <div className='sideContainer'>
          <ScoreContainer id={2} />
        </div>
      </div>
    </div>
  );
};

export default Cricket;
