import React, { useReducer } from 'react';
import OfficialContext from './officialContext';
import OfficialReducer from './officialReducer';

import { SET_NAMES, ADD_SCORE } from '../types';

const OfficialState = props => {
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

  const [state, dispatch] = useReducer(OfficialReducer, initialState);

  const addScore = (points, playerId) => {
    dispatch({
      type: ADD_SCORE,
      payload: { points: points, playerId: playerId }
    });
  };

  return (
    <OfficialContext.Provider
      value={{
        state,
        addScore
      }}
    >
      {props.children}
    </OfficialContext.Provider>
  );
};

export default OfficialState;
