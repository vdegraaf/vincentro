import React from 'react';
import Register from '../game/Register';
import Type from '../game/Type';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Choose your game</h2>
      <Type />
      <h2>Add your players</h2>
      <Register />
    </div>
  );
};

export default Home;
