import types from '../actions/ActionTypes'
const initState = {
    myWeibo: {}
}
function myWeiboReducer(state=initState,action) {
    switch(action.type) {
        case types.GET_MY_WEIBO:
            return Object.assign({},state,{myWeibo:action.myWeibo})
        default:
            return state
    }
}
export default myWeiboReducer
    
