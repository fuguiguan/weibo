import types from '../actions/ActionTypes'
const initState = {
    weibo: {}
}
function homeReducer(state=initState,action) {
    switch(action.type) {
        case types.SELECT_HOME:
            return Object.assign({},state,{weibo:action.weibo})
        default:
            return state
    }
}
export default homeReducer
    