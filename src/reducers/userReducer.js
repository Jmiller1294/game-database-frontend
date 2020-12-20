const INITIAL_STATE = {
    currentUser: null,
    loggedIn: false
}

export default function userReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "CREATE_USER":
            return {
                ...state,
                currentUser: action.payload.user,
                logged_in: true
            }
        case "SET_CURRENT_USER":
            return {
                ...state,
                currentUser: action.payload.user,
                logged_in: true
            }
        default: 
            return state;
    }
}