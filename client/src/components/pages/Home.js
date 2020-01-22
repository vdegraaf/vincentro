import React from 'react';
import Register from '../game/Register';
import Type from '../game/Type';
import StartGame from '../game/startGame'
import AddPlayer from '../game/AddPlayer'

const Home = () => {
  return (
    <div>
      <Type />
      {/* <Register /> */}
      <AddPlayer />
      <StartGame />
    </div>
  );
};

export default Home;
