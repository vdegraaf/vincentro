import React, { useContext } from 'react';
import CricketContext from '../../context/cricket/cricketContext';
import Minus from '../icons/CricketMinus';
import Plus from '../icons/CricketPlus';
import CricketPlus from '../icons/CricketPlus'

const ScoreBlock = ({ id, number }) => {
  const cricketContext = useContext(CricketContext);
  const { players, addScore, decreaseScore } = cricketContext;
  const player = players.find(player => player.id === id);

  const score = player.scores.find(score => score.key === number);

  const { points, counter } = score;
  let decreaseButton;
  points === 0 ? (decreaseButton = '-') : (decreaseButton = points);

  
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
          <CricketPlus  id={id} number={number} addScore={addScore} counter={counter}/>
       
      </div>
    );
          }

export default ScoreBlock;
