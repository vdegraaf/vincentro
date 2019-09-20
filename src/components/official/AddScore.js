import React, { useState, useContext } from 'react';
import GameContext from '../../context/game/gameContext';
import OfficialContext from '../../context/official/officialContext';

const AddScore = () => {
  const gameContext = useContext(GameContext);

  const { addPlayers, current } = gameContext;

  const [state, setState] = useState({
    p1: '',
    p2: ''
  });

  const { p1, p2 } = state;

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    addPlayers(state);
  };

  console.log(current, 'CURRENT', typeof current, 'TYPEOF');
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
          <input type='submit' value='BAM' />
        </div>
      </form>
    </div>
  );
};

export default AddScore;
