import { combineReducers } from 'redux';
import userReducer from './userReducer';
import gamesReducer from './gamesReducer';

const rootReducer = combineReducers({
    user: userReducer,
    games: gamesReducer
})
export default rootReducer;