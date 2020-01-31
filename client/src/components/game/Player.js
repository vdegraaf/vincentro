import React, { useContext } from 'react';
import GameContext from '../../context/game/gameContext';
import Close from '../../components/icons/Close';

const Player = () => {

  const gameContext = useContext(GameContext);
  const { players, deletePlayer } = gameContext;

  return (
    <>
      {players.length > 0 && <div >
        {players.map(player => {
          return (
              <div className="btn-player" key={player.id}>
                <span>
                  <h2>{player.nickname}</h2>
                  <h4>{player.department}</h4>
                </span>
                <Close deletePlayer={deletePlayer} playerId={player.id} />
              </div>
          );
        })}
      </div >}
    </>
  );
};

export default Player;