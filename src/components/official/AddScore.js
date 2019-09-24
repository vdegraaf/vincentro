import React, { useState, useContext } from 'react';
import GameContext from '../../context/game/gameContext';
import OfficialContext from '../../context/official/officialContext';

const AddScore = () => {
  const gameContext = useContext(GameContext);
  const officialContext = useContext(OfficialContext);

  const { current, resetGame } = gameContext;
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
    setState({ score: Number });
  };

  return (
    <div className='container-l footer'>
      <form onSubmit={onSubmit} className='form-501'>
        <div className='box box-m'>
          <input
            type='number'
            name='score'
            placeholder='Add Points'
            value={score}
            onChange={onChange}
            required
            min='0'
            max='180'
          />
        </div>
        <div className='box box-m'>
          <input type='submit' value='Submit' />
        </div>
      </form>
      {/* <button onClick={() => resetGame()}>Reset</button> */}
    </div>
  );
};

export default AddScore;
