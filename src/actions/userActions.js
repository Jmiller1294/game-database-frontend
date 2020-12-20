export const startCreateUser = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3001/registrations", {
      method: "POST",
      credentials: "include",
      headers: { 
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(data => dispatch(finishCreateUser(data)))
  }
}

const finishCreateUser = (data) => {
  return {
    type: "CREATE_USER",
    payload: data
  }
}

export const checkLoggedInStatus = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/logged_in", {
      credentials: "include",
    })
    .then(resp => resp.json())
    .then(data => dispatch(setCurrentUser(data)))
  }
}

const setCurrentUser = (data) => ({
  type: "SET_CURRENT_USER",
  payload: data,
})