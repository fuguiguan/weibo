import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import logoutReducer from './logoutReducer';
import homeReducer from './homeReducer'
import commentReducer from './commentReducer'
const rootReducer = combineReducers({
    loginReducer,
    logoutReducer,
    homeReducer,
    commentReducer
});
export default rootReducer;