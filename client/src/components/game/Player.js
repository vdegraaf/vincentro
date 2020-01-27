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
            <>
              < div className="btn-player" >
                <span>
                  <h3>{player.nickname}</h3>
                  <h3>{player.department}</h3>
                </span>
                <span onClick={() => deletePlayer(player.id)}>
                  <Close />
                </span>
              </div>
            </>
          );
        })}

      </div >}
    </>
  );
};

export default Player;