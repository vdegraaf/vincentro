import React, { useState, useContext } from 'react';
import GameContext from '../../context/game/gameContext';
import OfficialContext from '../../context/official/officialContext';

const AddScore = () => {
  const gameContext = useContext(GameContext);
  const officialContext = useContext(OfficialContext);

  const { current } = gameContext;
  const { addScore } = officialContext;

  const [state, setState] = useState({
    score: Number
  });

  const { score } = state;

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    addScore(score, current.id);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='number'
          name='score'
          placeholder='Add Points'
          value={score}
          onChange={onChange}
          required
        />

        <div>
          <input type='submit' value='Submit' />
        </div>
      </form>
    </div>
  );
};

export default AddScore;
