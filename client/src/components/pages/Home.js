import React, { useState } from 'react';
import Register from '../game/Register';
import Type from '../game/Type';
import StartGame from '../game/StartGame'
import AddPlayer from '../game/AddPlayer'

const Home = () => {
  const [isActive, setIsActive] = useState(true)

  return (
    <div>
      <Type />     
      <div onClick={() => setIsActive(!isActive)}>
        <AddPlayer />
      </div>
      {isActive && <Register /> }
      <StartGame />
    </div>
  );
};

export default Home;
