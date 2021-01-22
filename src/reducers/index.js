import { combineReducers } from 'redux';
import userReducer from './userReducer';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
    user: userReducer,
    games: gameReducer
})
export default rootReducer;