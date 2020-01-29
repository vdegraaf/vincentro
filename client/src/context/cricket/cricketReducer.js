import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  INCREMENT_SCORE,
  DECREMENT_SCORE,
  UPDATE_TOTAL_SCORE,
  SET_IDS,
  RESET_GAME
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
      case SET_IDS:
        return state.map((player, index) => {
          return {
            ...player,
            id: action.payload[index].id
          }
        })
    case RESET_GAME:
      return [
        {
          id: action.payload.p1.id,
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
          id: action.payload.p2.id,
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

    default:
      return state;
  }
};
