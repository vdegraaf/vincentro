import React, { useState, useContext } from 'react';
import GameContext from '../../context/game/gameContext';
import OfficialContext from '../../context/official/officialContext';
import AddCircle from '../icons/AddCircle';
import Previous from '../icons/Previous';

const AddScore = () => {
  const gameContext = useContext(GameContext);
  const officialContext = useContext(OfficialContext);

  const { id } = gameContext.current;
  const {switchPlayer} = gameContext
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
    
    setScore(e.target.value);
  };

  const onSubmit = e => {

    e.preventDefault();
    let points = validScoreCheck() ? 0 : score;
    addScore(points, id);
    setScore('');
    
  };

  const previous = () => {
    
    switchPlayer()
    deleteScore(id)
  }

  return (
    <div className='addScore-container'>
      <form onSubmit={onSubmit} className='addScore-form' >
        <Previous previous={previous}/>
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
        <AddCircle onSubmit={onSubmit}/>  
      </form>
    </div>
  );
};

export default AddScore;
