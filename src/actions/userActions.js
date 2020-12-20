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

export const startLogin = (data) => {
  return(dispatch) => {
    fetch("http://localhost:3001/sessions", {
      method: "POST",
      credentials: "include",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(data => dispatch(finishLogin(data)))
  }
}

const finishLogin = (data) => ({
  type: "LOGIN",
  payload: data
})

export const logout = () => {
  return(dispatch) => {
    fetch("http://localhost:3001/logout" , {
      method: "DELETE",
      credentials: "include"
    })
    .then(() => dispatch(finishLogout()))
  }
}

const finishLogout = () => ({
  type: "LOGOUT"
})