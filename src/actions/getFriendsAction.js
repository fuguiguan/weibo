import types from './ActionTypes'
import { getFriends } from '../api/index'
export default function friends() {
    return dispatch => {
        getFriends().then(friends => {
            console.log('get_friend_action',friends)
            dispatch({
                type: types.GET_FRIENDS,
                friends
            })
        })
    }
}
