import React, { useReducer, useContext } from 'react';
import OfficialContext from './officialContext';
import OfficialReducer from './officialReducer';
import GameContext from '../game/gameContext';

import { ADD_SCORE } from '../types';

const OfficialState = props => {
  const gameContext = useContext(GameContext);
  const { switchPlayer } = gameContext;

  const initialState = [
    {
      id: 1,
      totalScore: [],
      turnScore: ['10', '20', '88', '180'],
      lastScore: null
    },
    {
      id: 2,
      totalScore: [],
      turnScore: ['10', '20', '88', '180'],
      lastScore: null
    }
  ];

  const [players, dispatch] = useReducer(OfficialReducer, initialState);

  const addScore = (points, playerId) => {
    dispatch({
      type: ADD_SCORE,
      payload: { points: points, playerId: playerId }
    });
    switchPlayer();
  };

  return (
    <OfficialContext.Provider
      value={{
        players,
        addScore
      }}
    >
      {props.children}
    </OfficialContext.Provider>
  );
};

export default OfficialState;
