import React, { useState, useContext } from 'react';
import GameContext from '../../context/game/gameContext';
import OfficialContext from '../../context/official/officialContext';

const AddScore = () => {
  const gameContext = useContext(GameContext);
  const officialContext = useContext(OfficialContext);

  const { addPlayers, current } = gameContext;
  const { p1, p2 } = officialContext;

  const [state, setState] = useState({
    s1: '',
    s2: ''
  });

  const { s1, s2 } = state;

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

  return (
    <div>
      <form onSubmit={onSubmit}>
        {current.id === p1.id ? (
          <input
            type='text'
            name='s1'
            placeholder='Player Uno'
            value={s1}
            onChange={onChange}
            required
          />
        ) : (
          <input
            type='text'
            name='s2'
            placeholder='Player Dos'
            value={s2}
            onChange={onChange}
            required
          />
        )}
        <div>
          <input type='submit' value='BAM' />
        </div>
      </form>
    </div>
  );
};

export default AddScore;
