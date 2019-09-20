import React, { useReducer } from 'react';
import OfficialContext from './officialContext';
import OfficialReducer from './officialReducer';

import { SET_NAMES } from '../types';

const OfficialState = props => {
  const initialState = [
    {
      id: 1,
      totalScore: [],
      turnScore: [],
      lastScore: null
    },
    {
      id: 2,
      totalScore: [],
      turnScore: [],
      lastScore: null
    }
  ];

  const [state, dispatch] = useReducer(OfficialReducer, initialState);

  const setNames = players => {
    dispatch({ type: SET_NAMES, payload: players });
  };

  return (
    <OfficialContext.Provider
      value={{
        p1: state[0],
        p2: state[1],
        setNames
      }}
    >
      {props.children}
    </OfficialContext.Provider>
  );
};

export default OfficialState;
