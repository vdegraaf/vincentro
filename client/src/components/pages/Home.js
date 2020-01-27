import React, { useState } from 'react';
import Register from '../game/Register';
import Type from '../game/Type';
import StartGame from '../game/StartGame';
import AddPlayer from '../game/AddPlayer';
import Player from '../game/Player';

const Home = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <Type />
      <Player />
      {isActive === false && <AddPlayer isActive={isActive} setIsActive={setIsActive} />}
      {isActive && <Register isActive={isActive} setIsActive={setIsActive} />}
      {isActive === false && <StartGame title='Start Game' />}
    </div>
  );
};

export default Home;
