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

export const removeFavorite = (id) => {
  return {
    type: "REMOVE_FAVORITE",
    id: id
  }
}