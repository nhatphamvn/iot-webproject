import { combineReducers } from 'redux';
import authReducer from './counterReducer';

const rootReducer = combineReducers({
    users: authReducer 
});

export default rootReducer;