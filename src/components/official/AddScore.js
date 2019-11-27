import React, { useState, useContext } from 'react';
import GameContext from '../../context/game/gameContext';
import OfficialContext from '../../context/official/officialContext';

const AddScore = () => {
  const gameContext = useContext(GameContext);
  const officialContext = useContext(OfficialContext);

  const { id } = gameContext.current;
  const { addScore, players } = officialContext;

  const [score, setScore] = useState('');

  const validScoreCheck = () => {
    const { totalScore } = players.find(player => player.id === id);

    if (!totalScore) {
      return;
    }

    if (score > totalScore[0] || totalScore[0] - score === 1) {
      return true;
    }
  };

  const onChange = e => {
    setScore(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    let points = validScoreCheck() ? 0 : score;

    addScore(points, id);
    setScore('');
  };

  return (
    <div className='container-l footer'>
      <form onSubmit={onSubmit} className='form-501 addScore'>
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
            className='addScore'
          />
        </div>
        <div className='box box-m addScore'>
          <input className='addScore' type='submit' value='Submit' />
        </div>
        {/* <div className='box box-m addScore' onClick={() => resetGame()}>
          Reset
        </div> */}
      </form>
    </div>
  );
};

export default AddScore;
