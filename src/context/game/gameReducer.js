import {
  ADD_PLAYERS,
  SET_GAME,
  RESET_GAME,
  CURRENT_PLAYER,
  SET_WINNER
} from '../typesOfficial';

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
    case SET_WINNER:
      return {
        ...state,
        winner: state.players.find(player => player.id === action.payload)
      };
    case SET_GAME:
      return {
        ...state,
        game: action.payload
      };
    case RESET_GAME:
      return {
        ...state,
        winner: null
      };

    default:
      return state;
  }
};
