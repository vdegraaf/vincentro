import { ADD_PLAYERS, SET_GAME, RESET_GAME, CURRENT_PLAYER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_PLAYERS:
      return {
        ...state,
        players: action.payload,
        current: action.payload.playerOne
      };
    case CURRENT_PLAYER:
      return {
        ...state,
        current:
          state.current === state.players.playerOne
            ? state.players.playerTwo
            : state.players.playerOne
      };
    case SET_GAME:
      return {
        ...state,
        game: action.payload
      };
    case RESET_GAME:
      return {
        game: '',
        players: null,
        current: {}
      };

    default:
      return state;
  }
};
