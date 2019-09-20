import { ADD_SCORE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_SCORE:
      return state.map(player => {
        if (player.id === action.payload.playerId) {
          return {
            ...player,
            turnScore: [action.payload.points, ...player.turnScore]
          };
        } else return player;
      });

    default:
      return state;
  }
};
