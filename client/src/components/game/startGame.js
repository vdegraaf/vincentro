import React from 'react';


const StartGame = ({ isActive }) => {

  const submit = e => {

  };

  return (
    <span onClick={submit} className='cta-btn btn-active'>
      {isActive ? "Add Player" : "Start Game"}
    </span>
  );
};

export default StartGame;
