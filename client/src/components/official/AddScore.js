import React, { useState, useContext } from 'react';
import { isMobile } from 'react-device-detect';
import GameContext from '../../context/game/gameContext';
import OfficialContext from '../../context/official/officialContext';
import AddCircle from '../icons/AddCircle';
import Previous from '../icons/Previous';
import Keyboard from './Keyboard';

const AddScore = () => {
  const gameContext = useContext(GameContext);
  const officialContext = useContext(OfficialContext);

  const { id } = gameContext.current;
  const { switchPlayer } = gameContext;
  const { addScore, deleteScore, players } = officialContext;

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
    console.log('event', score, typeof score)

    setScore(score + e)
    // if keyboard is not active this fn should be called
    // setScore(e.target.value);
  };
  
  const onBackspace = () => {
    console.log('score', score)
    setScore(score.slice(0, -1));
  }

  const onSubmit = e => {

    e.preventDefault();
    let points = validScoreCheck() ? 0 : score;
    addScore(points, id);
    setScore('');

  };
  console.log(isMobile, 'ismobile')

  const previous = () => {

    switchPlayer();
    deleteScore(id);
  };

  return (
    <>
      <div className='addScore-container'>
        <form onSubmit={onSubmit} className='addScore-form' >
          <Previous previous={previous} />
          <div className='addScore-item '>
            <input
              type='number'
              name='score'
              placeholder='Score'
              value={score}
              onChange={onChange}
              required
              min='0'
              max='180'
              className='addScore-input'
            />
          </div>
          <AddCircle onSubmit={onSubmit} />
        </form>
      </div>

      {isMobile && <Keyboard onChange={onChange} onBackspace={onBackspace} score={score}/>}

    </>
  );
};

export default AddScore;
