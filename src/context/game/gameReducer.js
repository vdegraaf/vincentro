import { ADD_PLAYERS, SET_GAME } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_PLAYERS:
      return {
        ...state,
        players: action.payload
      };
    case SET_GAME:
      return {
        ...state,
        game: action.payload
      };

    default:
      return state;
  }
};
