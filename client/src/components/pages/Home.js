import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import GameContext from '../../context/game/gameContext';
import Register from '../game/Register';
import Type from '../game/Type';
import StartGame from '../game/StartGame';
import AddPlayer from '../game/AddPlayer';
import Player from '../game/Player';

const Home = () => {
  const gameContext = useContext(GameContext);
  const { game, players } = gameContext;
  const [redirect, setRedirect] = useState(false);
  const [isActive, setIsActive] = useState(false);


  const startGame = () => {
    
    if(players.length !== 2) {
      alert('Add two players') 
      return
    }
       
    setRedirect(true);
    setTimeout(() => {
      setRedirect(false);
    }, 2000);
  };

  return (
    <>
      {redirect && <Redirect to={`/${game}`} />}
      <div className="homepage">
        <Type />
        <Player />
        {isActive === false && players.length < 2 && <AddPlayer isActive={isActive} setIsActive={setIsActive} />}
        {isActive && <Register isActive={isActive} setIsActive={setIsActive} />}
        {isActive === false && <StartGame title='Start Game' onClick={startGame} />}
      </div>
    </>
  );
};

export default Home;
