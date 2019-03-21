import types from '../actions/ActionTypes';

export const AppState = {
    LOGIN: 'LOGIN',
    LOGIN_FAIL: 'LOGIN_FAIL',
    LOADING: 'LOADING'
}
const defaultState = {
    userInfo: null,
    status: AppState.LOADING
}

export default function loginReducer(state=defaultState, action) {
    switch (action.type) {
        case types.LOGIN_SUECESS: 
            return {status: AppState.LOGIN, userInfo: action.userInfo}
        case types.LOGIN_FAIL:
            return {status: AppState.LOGIN_FAIL, userInfo:null}
        default:
            return state
    }
}
