import React, { useContext } from 'react';
import GameContext from '../../context/game/gameContext';

const Type = () => {
  const gameContext = useContext(GameContext);
  const { setGameType, game } = gameContext;

  const onChange = e => {
    setGameType(e.target.value);
  };

  return (
    <div className='container container--radio'>
      <label className='label label--radio'>
        <input
          type='radio'
          name='game'
          value='501'
          checked={game === '501'}
          onChange={onChange}
          className='input--radio'
        />
        <img
          className={`checkmark
          ${game === '501' ? 'checkmark--true' : 'checkmark--false'}
        `}
        />{' '}
        501
      </label>
      <label className='label label--radio'>
        <input
          type='radio'
          name='game'
          value='Cricket'
          checked={game === 'Cricket'}
          onChange={onChange}
          className='input--radio'
        />
        <img
          className={`checkmark
          ${game === 'Cricket' ? 'checkmark--true' : 'checkmark--false'}
        `}
        />
        Cricket
      </label>
    </div>
  );
};

export default Type;
