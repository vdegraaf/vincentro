import React, { useContext } from 'react';
import CricketContext from '../../context/cricket/cricketContext';
import Minus from '../icons/CricketMinus';
import CricketPlus from '../icons/CricketPlus';

const ScoreBlock = ({ id, number, position }) => {
  const cricketContext = useContext(CricketContext);
  const { players, addScore, decreaseScore } = cricketContext;
  const player = players.find(player => player.id === id);

  const score = player.scores.find(score => score.key === number);

  const { points, counter } = score;
  let decreaseButton;
  points === 0 ? (decreaseButton = '-') : (decreaseButton = points);


  return (< div className="score__input">
    {position === 'left' && <>
      {points === 0 && <Minus id={id} number={number} counter={counter} decreaseScore={decreaseScore} />}
      {points !== 0 && <div id='decrease' className='input-number' onClick={() => decreaseScore(id, number)}>{decreaseButton}</div>}
      <CricketPlus id={id} number={number} addScore={addScore} counter={counter} />
    </>}
    {position === 'right' && <>
      <CricketPlus id={id} number={number} addScore={addScore} counter={counter} />
      {points !== 0 && <div id='decrease' className='input-number' onClick={() => decreaseScore(id, number)}>{decreaseButton}</div>}
      {points === 0 && <Minus id={id} number={number} counter={counter} decreaseScore={decreaseScore} />}
    </>}
  </div>


  );
};

export default ScoreBlock;
