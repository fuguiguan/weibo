import types from './ActionTypes'
import { getComment } from '../api/index'
export default function goCommet(page,count,id) {
    return dispatch => {
        getComment(page,count,id).then(comment => {
            console.log('getComment',comment)
            dispatch({
                type: types.GO_COMMENT,
                comment
            })
        })
    }
}
