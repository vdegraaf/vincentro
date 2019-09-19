import React, { useState, useContext } from 'react';
import PlayerContext from '../../context/players/playerContext';

const Type = () => {
  const playerContext = useContext(PlayerContext);

  const [game, setGame] = useState('');

  const { setGameType } = playerContext;

  const onChange = e => {
    setGame(e.target.value);
    setGameType(game);
    console.log(game, 'Game in onChange');
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
