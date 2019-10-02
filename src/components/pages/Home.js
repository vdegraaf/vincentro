import React from 'react';
import Register from '../game/Register';
import Type from '../game/Type';

const Home = () => {
  return (
    <div>
      <Type />
      <h2>Add your players</h2>
      <Register />
    </div>
  );
};

export default Home;
