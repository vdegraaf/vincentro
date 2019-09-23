import React, { useReducer, useContext, useEffect } from 'react';
import OfficialContext from './officialContext';
import OfficialReducer from './officialReducer';
import GameContext from '../game/gameContext';

import { ADD_SCORE, UPDATE_TOTAL_SCORE } from '../types';

const OfficialState = props => {
  const gameContext = useContext(GameContext);
  const { switchPlayer, current } = gameContext;

  const initialState = [
    {
      id: 1,
      totalScore: [501],
      turnScore: [],
      lastScore: null
    },
    {
      id: 2,
      totalScore: ['501'],
      turnScore: [],
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

  const updateTotalScore = playerId => {
    const player = players.find(players => players.id === playerId);

    const updatedScore = player.totalScore[0] - player.turnScore[0];
    dispatch({
      type: UPDATE_TOTAL_SCORE,
      payload: { playerId, updatedScore }
    });
  };

  return (
    <OfficialContext.Provider
      value={{
        players,
        addScore,
        updateTotalScore
      }}
    >
      {props.children}
    </OfficialContext.Provider>
  );
};

export default OfficialState;
