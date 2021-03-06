import types from '../actions/ActionTypes';

export const AppState = {
    LOGINED: 'LOGINED',
    LOGIN_FAIL: 'LOGIN_FAILURE',
    LOADING: 'LOADING'
}
export const defaultState = {
    userInfo: {},
    status: AppState.LOADING,  
}

export default function loginReducer(state=defaultState, action) {
    switch (action.type) {
        case types.LOGIN_SUECESS: 
            // return {status: AppState.LOGIN, userInfo: action.userInfo}
            return Object.assign({},state,{status: AppState.LOGINED,userInfo: action.userInfo})
        case types.LOGIN_FAIL:
            // return {status: AppState.LOGIN_FAILURE, userInfo:null}
            return Object.assign({},state,{status: AppState.LOGIN_FAILURE, userInfo: null})
        default:
            return state
    }
}
