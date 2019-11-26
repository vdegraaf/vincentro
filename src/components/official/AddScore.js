import React, { useState, useContext } from 'react';
import GameContext from '../../context/game/gameContext';
import OfficialContext from '../../context/official/officialContext';

const AddScore = () => {
  const gameContext = useContext(GameContext);
  const officialContext = useContext(OfficialContext);

  const { current} = gameContext;
  const { addScore, players } = officialContext;

  const [score, setScore] = useState()

  const validScoreCheck = () => {
    let currentScore
    
    players.forEach(player => {
      if (player.id === current.id) {
        return currentScore = player.totalScore;
      }
    });

    if (score >= currentScore) {
      return true;
    }
  };

  const onChange = e => {
    setScore(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (validScoreCheck()) {
      addScore(0, current.id)
    } else (
      addScore(score, current.id)
    )
    setScore("")
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
