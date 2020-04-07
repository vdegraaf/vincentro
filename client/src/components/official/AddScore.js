import React, { useState, useContext } from 'react';
import { isMobile } from 'react-device-detect';
import GameContext from '../../context/game/gameContext';
import OfficialContext from '../../context/official/officialContext';
import AddCircle from '../icons/AddCircle';
import Previous from '../icons/Previous';
import Keyboard from './Keyboard';
import Warning from '../official/Warning'

const AddScore = () => {
  const gameContext = useContext(GameContext);
  const officialContext = useContext(OfficialContext);

  const { id } = gameContext.current;
  const { switchPlayer } = gameContext;
  const { addScore, deleteScore, players } = officialContext;

  const [score, setScore] = useState('');
  const [warning, setWarning] = useState('')

  const validScoreCheck = () => {
    const { totalScore } = players.find(player => player.id === id);
    const invalidScores = ['163', '166', '169', '172', '173', '175', '176', '178', '179'];
    const invalidFinish = ['159', '162', '163', '166', '169'];

    if (!totalScore || invalidScores.includes(score) || parseInt(score) > 180) {
      setWarning('Invalid score')
      setTimeout(() => {
        setWarning('')
      }, 3000);
      return true;
    }

    if (score > totalScore[0] || totalScore[0] - score === 1 || (invalidFinish.includes((totalScore[0]).toString()) && invalidFinish.includes(score))) {
      setWarning('Invalid finish')
      setTimeout(() => {
        setWarning('')
      }, 3000);
      return true;

    }
  };

  const onChange = e => {
    if (isMobile) {
      setScore(score + e);
    } else {
      setScore(e.target.value);
    }

  };

  const onBackspace = () => {
    setScore(score.slice(0, -1));
  };

  const onSubmit = e => {
    e.preventDefault();
    let points = validScoreCheck() ? 0 : score;
    addScore(points, id);
    setScore('');

  };

  const previous = () => {

    switchPlayer();
    deleteScore(id);
  };
  
  return (
    <>
      <div className='addScore-container'>
        {warning && <Warning message={warning}/>}
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
              readOnly={isMobile ? true : false}
            />
          </div>
          <AddCircle onSubmit={onSubmit} />
        </form>
      </div>

      {isMobile && <Keyboard onChange={onChange} onBackspace={onBackspace} score={score} />}

    </>
  );
};

export default AddScore;
