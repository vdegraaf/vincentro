import React, { useReducer } from 'react';
import OfficialContext from './officialContext';
import OfficialReducer from './officialReducer';

import { SET_NAMES } from '../types';

const OfficialState = props => {
  const initialState = {
    p1: {},
    p2: {}
  };

  const [state, dispatch] = useReducer(OfficialReducer, initialState);

  const setNames = players => {
    dispatch({ type: SET_NAMES, payload: players });
  };

  return (
    <OfficialContext.Provider
      value={{
        state,
        setNames
      }}
    >
      {props.children}
    </OfficialContext.Provider>
  );
};

export default OfficialState;
