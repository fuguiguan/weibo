import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import logoutReducer from './logoutReducer';
import homeReducer from './homeReducer'
const rootReducer = combineReducers({
    loginReducer,
    logoutReducer,
    homeReducer
});
export default rootReducer;