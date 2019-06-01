import types from '../actions/ActionTypes';
const initState = {
    friends: ''
}
export default function friendReducer(state=initState,action) {
    switch(action.type) {
        case types.GET_FRIENDS:
            return Object.assign({}, state, {friends: action.friends})
    }
    return state;
}