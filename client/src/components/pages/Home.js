import React, { useState } from 'react';
import Register from '../game/Register';
import Type from '../game/Type';
import StartGame from '../game/StartGame';
import AddPlayer from '../game/AddPlayer';

const Home = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <Type />
      <div onClick={() => setIsActive(!isActive)}>
        {isActive === false && <AddPlayer />}
      </div>
      {isActive && <Register isActive={isActive} />}
      {isActive === false && <StartGame title='Start Game' />}
    </div>
  );
};

export default Home;
