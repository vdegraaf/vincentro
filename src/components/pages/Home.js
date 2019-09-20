import React, { useContext, useEffect } from 'react';
import Register from '../game/Register';
import Type from '../game/Type';
import GameContext from '../../context/game/gameContext';

const Home = () => {
  const gameContext = useContext(GameContext);

  const { resetGame } = gameContext;

  // useEffect(() => {
  //   resetGame();
  //   // eslint-disable-next-line
  // }, []);

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
