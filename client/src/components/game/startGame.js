import React from 'react';


const StartGame = ({ onClick, title }) => {
  return (
    <span onClick={onClick} className='cta-btn btn-active'>
      {title}
    </span>
  );
};

export default StartGame;
