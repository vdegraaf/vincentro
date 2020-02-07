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
    players: [{id: 1, nickname: 'vin', department: 'DXC'}, {id: 2, nickname: 'Sophie', department: 'DXC'}],
    current: {},
    winner: null
  };

  const [state, dispatch] = useReducer(GameReducer, initialState);

  const addPlayer = player => {
    // Adding timeout for user experience
    setTimeout(() => {
      dispatch({ type: ADD_PLAYER, payload: player });
    }, 80);
  };

  const deletePlayer = (id) => {
    // Adding timeout for user experience
    setTimeout(() => {
      dispatch({ type: DELETE_PLAYER, payload: id });
    }, 80);
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
