export const addGames = (data) => {
  return {
    type: "ADD_GAMES",
    payload: data
  }
}

export const addFavorite = (data) => {
  return {
    type: "ADD_FAVORITE",
    payload: data
  }
}