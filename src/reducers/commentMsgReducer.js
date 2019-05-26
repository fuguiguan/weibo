import types from '../actions/ActionTypes'
const initState = {
    myComment: {}
}
function commentMsgReducer(state=initState,action) {
    switch(action.type) {
        case types.GET_MY_COMMENT:
            return Object.assign({},state,{myComment:action.myComment})
        default:
            return state
    }
}
export default commentMsgReducer
    
