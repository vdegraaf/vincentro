import React, { useReducer, useContext, useEffect } from 'react';
import OfficialContext from './officialContext';
import OfficialReducer from './officialReducer';
import GameContext from '../game/gameContext';

import {
  ADD_SCORE,
  UPDATE_TOTAL_SCORE,
  RESET_OFFICIAL
} from '../typesOfficial';

const OfficialState = props => {
  const gameContext = useContext(GameContext);
  const { switchPlayer, setWinner, winner } = gameContext;

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

  useEffect(() => {
    if (winner === null) {
      resetOfficial();
    }
  }, [winner]);

  const addScore = (points, playerId) => {
    console.log('points:', points)

    dispatch({
      type: ADD_SCORE,
      payload: { points: points, playerId: playerId }
    });

    switchPlayer();
  };

  const updateTotalScore = playerId => {
    const player = players.find(players => players.id === playerId);
    const { turnScore, totalScore } = player;

    let updatedScore;

    if (totalScore[0] - turnScore[0] === 0) {
      updatedScore = 0;
      setWinner(playerId);
    } else if (totalScore[0] - turnScore[0] < 2) {
      updatedScore = totalScore[0];
      // turnScore should be deleted
    } else {
      updatedScore = totalScore[0] - turnScore[0];
    }

    dispatch({
      type: UPDATE_TOTAL_SCORE,
      payload: { playerId, updatedScore }
    });
    if (updatedScore === 0) {
    }
  };

  const resetOfficial = () => {
    dispatch({
      type: RESET_OFFICIAL
    });
  };

  return (
    <OfficialContext.Provider
      value={{
        players,
        addScore,
        updateTotalScore,
        resetOfficial
      }}
    >
      {props.children}
    </OfficialContext.Provider>
  );
};

export default OfficialState;
