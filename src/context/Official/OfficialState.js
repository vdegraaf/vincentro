import React, { useReducer } from 'react';
import OfficialContext from './officialContext';
import OfficialReducer from './officialReducer';

import { SET_NAMES } from '../types';

const OfficialState = props => {
  const initialState = {
    p1: {
      name: '',
      totalScore: [],
      turnScore: [],
      lastScore: null
    },
    p2: {
      name: '',
      totalScore: [],
      turnScore: [],
      lastScore: null
    }
  };

  const [state, dispatch] = useReducer(OfficialReducer, initialState);

  const setNames = players => {
    dispatch({ type: SET_NAMES, payload: players });
  };

  return (
    <OfficialContext.Provider
      value={{
        p1: state.p1,
        p2: state.p2,
        setNames
      }}
    >
      {props.children}
    </OfficialContext.Provider>
  );
};

export default OfficialState;
