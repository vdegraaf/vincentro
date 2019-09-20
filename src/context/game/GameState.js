import React, { useReducer } from 'react';
import GameContext from './gameContext';
import GameReducer from './gameReducer';
import { ADD_PLAYERS, SET_GAME, RESET_GAME, CURRENT_PLAYER } from '../types';

const GameState = props => {
  const initialState = {
    game: '',
    players: [{ id: 1, name: 'Vincent' }, { id: 2, name: 'Sophie' }],
    current: {}
  };

  const [state, dispatch] = useReducer(GameReducer, initialState);

  const addPlayers = players => {
    dispatch({ type: ADD_PLAYERS, payload: players });
  };

  const switchPlayer = () => {
    dispatch({ type: CURRENT_PLAYER });
  };

  const setGameType = gameType => {
    dispatch({
      type: SET_GAME,
      payload: gameType
    });
  };

  // Not used yet
  const resetGame = () => {
    dispatch({
      type: RESET_GAME
    });
  };

  return (
    <GameContext.Provider
      value={{
        players: state.players,
        current: state.current,
        game: state.game,
        addPlayers,
        setGameType,
        resetGame
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
