const INITIAL_STATE = {
  games: [],
  favorites: []
}

export default function gamesReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case "ADD_GAMES":
      console.log(state)
      console.log(action.payload)
      return {
        ...state, games: [...action.payload]
      }
    case "ADD_FAVORITE":
      console.log(action.payload)
      return {
        ...state, favorites: [...state.favorites, action.payload]
      }
    default:
      return state;
  }
}