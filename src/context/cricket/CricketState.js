import React, { useReducer } from 'react';
import CricketContext from './cricketContext';
import CricketReducer from './cricketReducer';

const CricketState = () => {
  const initialState = [];
  const [state, dispatch] = useReducer(CrickerReducer, initialState);

  return (
    <CricketContext.Provider
      value={
        {
          // state
        }
      }
    >
      {props.children}
    </CricketContext.Provider>
  );
};
