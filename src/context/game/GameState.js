import React, { useReducer } from 'react';
import GameContext from './gameContext';
import GameReducer from './gameReducer';
import { ADD_PLAYERS, SET_GAME } from '../types';

const GameState = props => {
  const initialState = {
    game: '',
    players: [],
    current: {}
  };

  const [state, dispatch] = useReducer(GameReducer, initialState);

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
    <GameContext.Provider
      value={{
        players: state.players,
        current: state.current,
        game: state.game,
        addPlayers,
        setGameType
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
