import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import logoutReducer from './logoutReducer';
import homeReducer from './homeReducer'
import commentReducer from './commentReducer'
import myWeiboReducer from './myWeiboReducer'
import commentMsgReducer from './commentMsgReducer'
import commentAtMeReducer from './commentAtMeReducer'
import friendsReducer from './friendsReducer'
const rootReducer = combineReducers({
    loginReducer,
    logoutReducer,
    homeReducer,
    commentReducer,
    myWeiboReducer,
    commentMsgReducer,
    commentAtMeReducer,
    friendsReducer
});
export default rootReducer;