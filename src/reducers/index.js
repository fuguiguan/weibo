import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import logoutReducer from './logoutReducer';
const rootReducer = combineReducers({
    loginReducer,
    logoutReducer
});
export default rootReducer;