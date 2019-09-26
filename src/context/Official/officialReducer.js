import {
  ADD_SCORE,
  UPDATE_TOTAL_SCORE,
  RESET_OFFICIAL
} from '../typesOfficial';

export default (state, action) => {
  switch (action.type) {
    case ADD_SCORE:
      return state.map(player => {
        if (player.id === action.payload.playerId) {
          return {
            ...player,
            turnScore: [action.payload.points, ...player.turnScore],
            lastScore: action.payload.points
          };
        } else return player;
      });
    case UPDATE_TOTAL_SCORE:
      return state.map(player => {
        if (player.id === action.payload.playerId) {
          return {
            ...player,
            totalScore: [action.payload.updatedScore, ...player.totalScore]
          };
        } else return player;
      });
    case RESET_OFFICIAL:
      return [
        {
          id: 1,
          totalScore: ['501'],
          turnScore: []
        },
        {
          id: 2,
          totalScore: ['501'],
          turnScore: []
        }
      ];
    default:
      return state;
  }
};
