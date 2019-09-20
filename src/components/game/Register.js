import React, { useState, useContext } from 'react';
import GameContext from '../../context/game/gameContext';

const Register = () => {
  const gameContext = useContext(GameContext);

  const { addPlayers } = gameContext;

  const [state, setState] = useState({
    playerOne: '',
    playerTwo: ''
  });

  const { playerOne, playerTwo } = state;

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    addPlayers(state);

    // Do some form validation here
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='playerOne'
          placeholder='Player Uno'
          value={playerOne}
          onChange={onChange}
          required
        />
        <input
          type='text'
          name='playerTwo'
          placeholder='Player Dos'
          value={playerTwo}
          onChange={onChange}
          required
        />
        <div>
          <input type='submit' value='Start Game' />
        </div>
      </form>
    </div>
  );
};

export default Register;
