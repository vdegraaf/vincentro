import React from 'react';


const StartGame = ({ onClick, title, disabled }) => {
  
  return (
    <span onClick={onClick} className={`cta-btn btn-${disabled ? 'inActive' : 'active'}`}>
      {title}
    </span>
  );
};

export default StartGame;
