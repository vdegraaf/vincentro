import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import GameContext from '../../context/game/gameContext';

const Register = () => {
  const gameContext = useContext(GameContext);

  const { addPlayers, game, players } = gameContext;

  const [redirect, setRedirect] = useState(false);

  const [names, setNames] = useState({
    p1: '',
    p2: ''
  });

  const { p1, p2 } = names;

  useEffect(() => {
    if (players) {
      setNames({
        p1: players[0].name,
        p2: players[1].name
      });
    }
  }, []);

  const onChange = e => {
    setNames({
      ...names,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    addPlayers(names);
    setRedirect(true);
    setTimeout(() => {
      setRedirect(false);
    }, 2000);
  };

  if (redirect) {
    return <Redirect to={`/${game}`} />;
  } else {
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            name='p1'
            placeholder='Player Uno'
            value={p1}
            onChange={onChange}
            required
          />
          <input
            type='text'
            name='p2'
            placeholder='Player Dos'
            value={p2}
            onChange={onChange}
            required
          />
          <div>
            <input type='submit' value='Start Game' />
          </div>
        </form>
      </div>
    );
  }
};

export default Register;
