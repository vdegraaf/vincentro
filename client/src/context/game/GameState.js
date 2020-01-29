import React, { useReducer } from 'react';
import GameContext from './gameContext';
import GameReducer from './gameReducer';
import {
  ADD_PLAYER,
  DELETE_PLAYER,
  SET_GAME,
  RESET_GAME,
  CURRENT_PLAYER,
  SET_WINNER
} from '../typesOfficial';

const GameState = props => {
  const initialState = {
    game: '501',
    players: [{ id: 8888, nickname: 'Vincent', department: 'DXC' }, { id: 333, nickname: 'Pim', department: 'Interactive' }],
    current: {},
    winner: null
  };

  const [state, dispatch] = useReducer(GameReducer, initialState);

  const addPlayer = player => {
    dispatch({ type: ADD_PLAYER, payload: player });
  };

  const deletePlayer = (id) => {
    dispatch({ type: DELETE_PLAYER, payload: id });
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
        addPlayer,
        deletePlayer,
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
