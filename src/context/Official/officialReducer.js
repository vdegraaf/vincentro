import { SET_NAMES } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_NAMES:
      return {
        ...state,
        p1: { name: action.payload.playerOne },
        p2: { name: action.payload.playerTwo }
      };

    default:
      return state;
  }
};
