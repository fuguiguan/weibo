import types from '../actions/ActionTypes'
const initState = {
    commentAtMe: {}
}
function commentAtMeReducer(state=initState,action) {
    switch(action.type) {
        case types.GET_COMMENT_AT_ME:
            return Object.assign({},state,{commentAtMe:action.commentAtMe})
        default:
            return state
    }
}
export default commentAtMeReducer
    
