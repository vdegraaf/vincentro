import React, { useReducer } from 'react';
import OfficialContext from './officialContext';
import OfficialReducer from './officialReducer';
import {} from '../types';

const OfficialState = props => {
  const initialState = {};

  const [state, dispatch] = useReducer(OfficialReducer, initialState);

  return (
    <OfficialContext.Provider value={{}}>
      {props.children}
    </OfficialContext.Provider>
  );
};

export default GameState;
