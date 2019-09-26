import React, { useReducer } from 'react';
import CricketContext from './cricketContext';
import CricketReducer from './cricketReducer';
import {
  INCREMENT_SCORE,
  INCREMENT_COUNTER,
  DECREMENT_SCORE,
  DECREMENT_COUNTER,
  UPDATE_TOTAL_SCORE
} from '../typesCricket';

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
        { key: '25', points: 0, counter: 0 }
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
        { key: '25', points: 0, counter: 0 }
      ],
      totalScore: 0
    }
  ];

  const [state, dispatch] = useReducer(CricketReducer, initialState);

  const limitCheck = number => {
    const counterP1 = state
      .find(player => player.id === 1)
      .scores.find(s => s.key === number).counter;
    const counterP2 = state
      .find(player => player.id === 2)
      .scores.find(s => s.key === number).counter;

    if (counterP1 === 3 && counterP2 === 3) {
      return true;
    }
  };

  const addScore = (id, number) => {
    // Check if both counters are full
    if (limitCheck(number)) {
      return;
    }

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
        type: INCREMENT_SCORE,
        payload: { id, number }
      });
    }
  };

  const decreaseScore = (id, number) => {
    const score = state
      .find(player => player.id === id)
      .scores.find(s => s.key === number);

    if (score.points > 0) {
      dispatch({
        type: DECREMENT_SCORE,
        payload: { id, number }
      });
    } else if (score.counter !== 0) {
      dispatch({
        type: DECREMENT_COUNTER,
        payload: { id, number }
      });
    }
  };

  const updateTotalScore = id => {
    const totalScore = state
      .find(player => player.id === id)
      .scores.map(score => score.points)
      .reduce((a, b) => a + b, 0);

    dispatch({
      type: UPDATE_TOTAL_SCORE,
      payload: { id, totalScore }
    });
  };

  return (
    <CricketContext.Provider
      value={{
        players: state,
        addScore,
        decreaseScore,
        updateTotalScore
      }}
    >
      {props.children}
    </CricketContext.Provider>
  );
};

export default CricketState;
