const INITIAL_STATE = {
  games: [],
  favorites: []
}

export default function gamesReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case "ADD_GAMES":
      return {
        ...state, games: [...action.payload]
      }
    case "ADD_FAVORITE":
      return {
        ...state, favorites: [...state.favorites, action.payload]
      }
    case "REMOVE_FAVORITE":
      return {
        ...state, favorites: state.favorites.filter(item => item.id !== action.id)
      }
    default:
      return state;
  }
}