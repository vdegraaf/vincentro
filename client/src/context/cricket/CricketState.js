import React, { useReducer } from 'react';
import CricketContext from './cricketContext';
import CricketReducer from './cricketReducer';
import {
  INCREMENT_SCORE,
  INCREMENT_COUNTER,
  DECREMENT_SCORE,
  DECREMENT_COUNTER,
  UPDATE_TOTAL_SCORE,
  SET_IDS,
  RESET_GAME
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
  
  const setIds = (players) => {
    dispatch({
      type: SET_IDS,
      payload: players
    })    
  }

  const limitCheck = number => {
    const counterP1 = state[0]
      .scores.find(s => s.key === number).counter;
    const counterP2 = state[1]
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

  const winnerCheck = () => {
    const counterP1 = state[0]
      .scores.map(score => (score.counter === 3 ? true : false));
    const counterP2 = state[1]
      .scores.map(score => (score.counter === 3 ? true : false));

    const totalScoreP1 = state[0].totalScore;
    const totalScoreP2 = state[1].totalScore;
    
    if (counterP1.every(i => i === true) && totalScoreP1 >= totalScoreP2) {
      return state[0].id;
    }
    if (counterP2.every(i => i === true) && totalScoreP2 >= totalScoreP1) {
      return state[1].id;
    }
  };

  const resetGame = ({p1, p2}) => {
    dispatch({
      type: RESET_GAME,
      payload: {p1, p2}
    });
  };

  return (
    <CricketContext.Provider
      value={{
        players: state,
        addScore,
        decreaseScore,
        updateTotalScore,
        winnerCheck,
        resetGame,
        setIds
      }}
    >
      {props.children}
    </CricketContext.Provider>
  );
};

export default CricketState;
