import React, { useContext } from 'react';
import CricketContext from '../../context/cricket/cricketContext';
import Minus from '../icons/CricketMinus'
import Plus from '../icons/CricketPlus'

const ScoreBlock = ({ id, number }) => {
  const cricketContext = useContext(CricketContext);
  const { players, addScore, decreaseScore } = cricketContext;
  const player = players.find(player => player.id === id);

  const score = player.scores.find(score => score.key === number);

  const { points, counter } = score;
  let decreaseButton;
  points === 0 ? (decreaseButton = '-') : (decreaseButton = points);

  if (id === 1) {
    return (
      < div className="score__input">
     
          {points === 0 && (
            <Minus id={id} number={number} counter={counter} decreaseScore={decreaseScore} />
          )}
          {points !== 0 && (
            <div
              id='decrease'
              className='input-number'
              onClick={() => decreaseScore(id, number)}
            >
              {decreaseButton}
            </div>
          )}
          <Plus id={id} number={number} addScore={addScore}  className={counter === 0 ? '#ffb7b7' : counter === 1 ? '#a8a8ff' : counter === 2 ? '#a52008' : '#ff3333'} />
       
      </div>
    );
  } else
    return (
      <div className="score__input">
   
   <Plus id={id} number={number} addScore={addScore}  className={counter === 0 ? '#ffb7b7' : counter === 1 ? '#a8a8ff' : counter === 2 ? '#a52008' : '#ff3333'} />
   {points === 0 && (
            <Minus id={id} number={number} counter={counter} decreaseScore={decreaseScore} />
          )}
          {points !== 0 && (
            <div
              id='decrease'
              className='input-number'
              onClick={() => decreaseScore(id, number)}
            >
              {decreaseButton}
            </div>
          )}
      </div>
    );
};

export default ScoreBlock;
