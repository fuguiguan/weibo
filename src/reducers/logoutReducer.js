import types from '../actions/ActionTypes';
import { defaultState } from './loginReducer'
const initState = {
    userInfo: defaultState.userInfo
}
export default function logoutReducer(state=initState,action) {
    switch(action.type) {
        case types.LOGOUT:
            return Object.assign({}, state, {userInfo: ''})
    }
    return state;
}