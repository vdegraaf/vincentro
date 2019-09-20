import React, { useContext } from 'react';
import GameContext from '../../context/game/gameContext';

const Type = () => {
  const gameContext = useContext(GameContext);

  const { setGameType, game } = gameContext;

  const onChange = e => {
    setGameType(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type='radio'
          name='game'
          value='501'
          checked={game === '501'}
          onChange={onChange}
        />{' '}
        501
        <input
          type='radio'
          name='game'
          value='Cricket'
          checked={game === 'Cricket'}
          onChange={onChange}
        />{' '}
        Cricket
        <input
          type='radio'
          name='game'
          value='Clock'
          checked={game === 'Clock'}
          onChange={onChange}
        />{' '}
        Around the Clock
      </form>
    </div>
  );
};

export default Type;
