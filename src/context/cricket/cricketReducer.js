import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  ADD_SCORE
} from '../typesCricket';

export default (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state.map(player => {
        if (player.id === action.payload.id) {
          return {
            ...player,
            scores: player.scores.map(score => {
              if (score.key === action.payload.number) {
                return {
                  ...score,
                  counter: score.counter + 1
                };
              } else return score;
            })
          };
        } else return player;
      });
    case ADD_SCORE:
      return state.map(player => {
        if (player.id === action.payload.id) {
          return {
            ...player,
            scores: player.scores.map(score => {
              if (score.key === action.payload.number) {
                return {
                  ...score,
                  points: score.points + parseInt(score.key)
                };
              } else return score;
            })
          };
        } else return player;
      });

    default:
      return state;
  }
};
