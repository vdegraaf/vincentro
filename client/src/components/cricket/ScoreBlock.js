import React, { useContext } from 'react';
import CricketContext from '../../context/cricket/cricketContext';

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
      <div className='scoreContainer'>
        <>
          {points === 0 && (
            <img
              id='decrease'
              className='score__item points__item '
              onClick={() => decreaseScore(id, number)}
              src={require(`../../images/min-icon.png`)}
              alt='icon'
            />
          )}
          {points !== 0 && (
            <div
              id='decrease'
              className='score__item '
              onClick={() => decreaseScore(id, number)}
            >
              {decreaseButton}
            </div>
          )}
          <img
            id='increase'
            className='score__item '
            onClick={() => addScore(id, number)}
            src={require(`../../images/counter-${counter}.png`)}
            alt='icon'
          />
        </>
      </div>
    );
  } else
    return (
      <div className='scoreContainer'>
        <>
          <img
            id='increase'
            className='score__item '
            onClick={() => addScore(id, number)}
            src={require(`../../images/counter-${counter}.png`)}
            alt='icon'
          />
          {points === 0 && (
            <img
              id='decrease'
              className='score__item '
              onClick={() => decreaseScore(id, number)}
              src={require(`../../images/min-icon.png`)}
              alt='icon'
            />
          )}
          {points !== 0 && (
            <div
              id='decrease'
              className='score__item '
              onClick={() => decreaseScore(id, number)}
            >
              {decreaseButton}
            </div>
          )}
        </>
      </div>
    );
};

export default ScoreBlock;
