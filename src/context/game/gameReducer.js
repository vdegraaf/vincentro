import { ADD_PLAYERS, SET_GAME, RESET_GAME, CURRENT_PLAYER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_PLAYERS:
      return {
        ...state,
        players: [
          { id: 1, name: action.payload.p1 },
          { id: 2, name: action.payload.p2 }
        ],
        current: { id: 1, name: action.payload.p1 }
      };
    case CURRENT_PLAYER:
      return {
        ...state,
        current: state.current.id === 1 ? state.players[1] : state.players[0]
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
