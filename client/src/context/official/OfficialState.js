import React, { useReducer, useContext, useEffect } from 'react';
import OfficialContext from './officialContext';
import OfficialReducer from './officialReducer';
import GameContext from '../game/gameContext';

import {
  ADD_SCORE,
  DELETE_SCORE,
  SET_IDS,
  UPDATE_TOTAL_SCORE,
  RESET_OFFICIAL,
  SET_301
} from '../typesOfficial';

const OfficialState = props => {
  const gameContext = useContext(GameContext);
  const { switchPlayer, setWinner, winner } = gameContext;

  const initialState = [
    {
      id: 1,
      totalScore: [501],
      turnScore: []
    },
    {
      id: 2,
      totalScore: [501],
      turnScore: []
    }
  ];

  const [players, dispatch] = useReducer(OfficialReducer, initialState);

  useEffect(() => {
    if (winner === null) {
      // resetOfficial();
    }
  }, [winner]);
  
  const setIdsOfficial = (players) => {
    dispatch({
      type: SET_IDS,
      payload: players
    })    
  }

  const addScore = (points, playerId) => {
    dispatch({
      type: ADD_SCORE,
      payload: { points: points, playerId: playerId }
    });

    switchPlayer();
  };

  const deleteScore = (playerId) => {
    dispatch({
      type: DELETE_SCORE,
      payload: playerId
    })
  }

  const updateTotalScore = playerId => {
    const { turnScore, totalScore } = players.find(players => players.id === playerId);
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
 
  };

  const resetOfficial = (p1, p2) => {
    dispatch({
      type: RESET_OFFICIAL,
      payload: {p1, p2}
    });
  };
  
  const set301 = () => {
    dispatch({
      type: SET_301
    });
  }

  return (
    <OfficialContext.Provider
      value={{
        players,
        addScore,
        deleteScore,
        updateTotalScore,
        resetOfficial,
        setIdsOfficial,
        set301
      }}
    >
      {props.children}
    </OfficialContext.Provider>
  );
};

export default OfficialState;
