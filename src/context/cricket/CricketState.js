import React, { useReducer } from 'react';
import CricketContext from './cricketContext';
import CricketReducer from './cricketReducer';
import { ADD_SCORE, INCREMENT_COUNTER } from '../typesCricket';

const CricketState = props => {
  const initialState = [
    {
      id: 1,
      scores: [
        { key: '20', points: 0, counter: 0 },
        { key: '19', points: 0, counter: 0 },
        { key: '18', points: 0, counter: 0 },
        { key: '17', points: 0, counter: 0 },
        { key: '16', points: 0, counter: 0 },
        { key: '15', points: 0, counter: 0 },
        { key: 'Bull', points: 0, counter: 0 }
      ],
      totalScore: 0
    },
    {
      id: 2,
      scores: [
        { key: '20', points: 0, counter: 0 },
        { key: '19', points: 0, counter: 0 },
        { key: '18', points: 0, counter: 0 },
        { key: '17', points: 0, counter: 0 },
        { key: '16', points: 0, counter: 0 },
        { key: '15', points: 0, counter: 0 },
        { key: 'Bull', points: 0, counter: 0 }
      ],
      totalScore: 0
    }
  ];

  const [state, dispatch] = useReducer(CricketReducer, initialState);

  const addScore = (id, number) => {
    const score = state
      .find(player => player.id === id)
      .scores.find(s => s.key === number);

    if (score.counter < 3) {
      dispatch({
        type: INCREMENT_COUNTER,
        payload: { id, number }
      });
    } else {
      dispatch({
        type: ADD_SCORE,
        payload: { id, number }
      });
    }
  };

  return (
    <CricketContext.Provider
      value={{
        players: state,
        addScore
      }}
    >
      {props.children}
    </CricketContext.Provider>
  );
};

export default CricketState;
