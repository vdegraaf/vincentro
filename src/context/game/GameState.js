import React, { useReducer } from 'react';
import GameContext from './gameContext';
import GameReducer from './gameReducer';
import {
  ADD_PLAYERS,
  SET_GAME,
  RESET_GAME,
  CURRENT_PLAYER,
  SET_WINNER
} from '../types';

const GameState = props => {
  const initialState = {
    game: '',
    players: [{ id: 1, name: 'Vincent' }, { id: 2, name: 'Sophie' }],
    current: {},
    winner: null
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

  const setWinner = id => {
    dispatch({
      type: SET_WINNER,
      payload: id
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
        winner: state.winner,
        addPlayers,
        setWinner,
        setGameType,
        resetGame,
        switchPlayer
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
