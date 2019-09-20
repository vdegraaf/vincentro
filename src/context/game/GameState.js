import React, { useReducer } from 'react';
import GameContext from './gameContext';
import GameReducer from './gameReducer';
import { ADD_PLAYERS, SET_GAME, RESET_GAME, CURRENT_PLAYER } from '../types';

const GameState = props => {
  const initialState = {
    game: '',
    players: { playerOne: 'Vin', playerTwo: 'Sophie' },
    current: ''
  };

  const [state, dispatch] = useReducer(GameReducer, initialState);

  const addPlayers = game => {
    dispatch({ type: ADD_PLAYERS, payload: game });
  };

  const currentPlayer = () => {
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
