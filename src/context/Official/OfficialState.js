import React, { useReducer, useContext } from 'react';
import OfficialContext from './officialContext';
import OfficialReducer from './officialReducer';
import GameContext from '../game/gameContext';

import { ADD_SCORE, UPDATE_TOTAL_SCORE } from '../types';

const OfficialState = props => {
  const gameContext = useContext(GameContext);
  const { switchPlayer } = gameContext;

  const initialState = [
    {
      id: 1,
      totalScore: ['501'],
      turnScore: []
    },
    {
      id: 2,
      totalScore: ['501'],
      turnScore: []
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
    let updatedScore;

    if (player.totalScore[0] - player.turnScore[0] === 0) {
      alert('You gave won!');
    }

    if (player.totalScore[0] - player.turnScore[0] < 2) {
      updatedScore = player.totalScore[0];
      // turnScore should be deleted
    } else {
      updatedScore = player.totalScore[0] - player.turnScore[0];
    }

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
