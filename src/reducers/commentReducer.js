import types from '../actions/ActionTypes'
const initState = {
    comment: {}
}
function commentReducer(state=initState,action) {
    switch(action.type) {
        case types.GO_COMMENT:
            return Object.assign({},state,{comment:action.comment})
        default:
            return state
    }
}
export default commentReducer
    