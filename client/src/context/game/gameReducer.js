import {
  ADD_PLAYER,
  DELETE_PLAYER,
  SET_GAME,
  RESET_GAME,
  CURRENT_PLAYER,
  SET_WINNER
} from '../typesOfficial';

export default (state, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        players: [action.payload, ...state.players],
        current: { id: 1, name: action.payload.p1 }
      };
    case DELETE_PLAYER:
      return {
        ...state,
        players: state.players.filter(player => player.id !== action.payload)
      };
    case CURRENT_PLAYER:
      return {
        ...state,
        current: state.current.id === {} ? state.players[0] :
          state.players.find(p => p.id !== state.current.id)
          
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
