import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userReducer';
import gamesReducer from './gamesReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['games', 'user']
}

const rootReducer = combineReducers({
    user: userReducer,
    games: gamesReducer
})

export default persistReducer(persistConfig, rootReducer);