import React, { useState, useContext } from 'react';
import GameContext from '../../context/game/gameContext';
import OfficialContext from '../../context/official/officialContext';

const AddScore = () => {
  const gameContext = useContext(GameContext);
  const officialContext = useContext(OfficialContext);

  const { current} = gameContext;
  const { addScore, players } = officialContext;

  const [state, setState] = useState({
    score: Number
  });

  const { score } = state;

  const validScoreCheck = () => {
    let currentScore
    
    players.forEach(player => {
      if (player.id === current.id) {
        return currentScore = player.totalScore;
      }
    });

    console.log('currentScore:', currentScore)

    if (score >= currentScore) {
      console.log('score is higher');
      return true;
    }
  };

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (validScoreCheck()) {
      console.log('if statement calidScore true')
      setState({score: '-' });
    }

    console.log(score, 'score');
    console.log('state:',state)

    addScore(score, current.id);
    setState({ score: Number });
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
