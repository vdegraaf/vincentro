import React, { useReducer } from 'react';
import PlayerContext from './playerContext';
import PlayerReducer from './playerReducer';
import { ADD_PLAYERS, SET_GAME } from '../types';

const PlayerState = props => {
  const initialState = {
    game: '',
    players: [],
    current: {}
  };

  const [state, dispatch] = useReducer(PlayerReducer, initialState);

  const addPlayers = game => {
    dispatch({ type: ADD_PLAYERS, payload: game });
  };

  const setGameType = gameType => {
    dispatch({
      type: SET_GAME,
      payload: gameType
    });
  };

  return (
    <PlayerContext.Provider
      value={{
        players: state.players,
        current: state.current,
        game: state.game,
        addPlayers,
        setGameType
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerState;
