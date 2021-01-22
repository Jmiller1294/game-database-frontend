const INITIAL_STATE = {
  game: {}
}

export default function gameReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case "ADD_GAME":
      return {
        ...state, game: action.payload
      }
    default:
      return state;
  }
}