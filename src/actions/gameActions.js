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

export const removeFavorite = (data) => {
  return {
    type: "REMOVE_FAVORITE",
    payload: data
  }
}