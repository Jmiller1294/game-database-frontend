const INITIAL_STATE = {
  games: []
}

export default function gamesReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case "ADD_GAME":
      console.log(state)
      console.log(action.payload)
      return {
        ...state, games: [...action.payload]
      }
    default:
      return state;
  }
}