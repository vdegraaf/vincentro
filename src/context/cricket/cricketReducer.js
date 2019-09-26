import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  INCREMENT_SCORE,
  DECREMENT_SCORE,
  UPDATE_TOTAL_SCORE
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
    case DECREMENT_COUNTER:
      return state.map(player => {
        if (player.id === action.payload.id) {
          return {
            ...player,
            scores: player.scores.map(score => {
              if (score.key === action.payload.number) {
                return {
                  ...score,
                  counter: score.counter - 1
                };
              } else return score;
            })
          };
        } else return player;
      });
    case INCREMENT_SCORE:
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
    case DECREMENT_SCORE:
      return state.map(player => {
        if (player.id === action.payload.id) {
          return {
            ...player,
            scores: player.scores.map(score => {
              if (score.key === action.payload.number) {
                return {
                  ...score,
                  points: score.points - parseInt(score.key)
                };
              } else return score;
            })
          };
        } else return player;
      });
    case UPDATE_TOTAL_SCORE:
      return state.map(player => {
        if (player.id === action.payload.id) {
          return {
            ...player,
            totalScore: action.payload.totalScore
          };
        } else return player;
      });

    default:
      return state;
  }
};
