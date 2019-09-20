import React, { useContext } from 'react';
import PlayerContext from '../../context/players/playerContext';

const Type = () => {
  const playerContext = useContext(PlayerContext);

  const { setGameType, game } = playerContext;

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
