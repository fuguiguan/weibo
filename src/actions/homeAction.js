import types from './ActionTypes'
import { getWeibo } from '../api/index'
export default function selectHome(page,count) {
    return dispatch => {
        getWeibo(page,count).then(weibo => {
            console.log('selectHome',weibo)
            dispatch({
                type: types.SELECT_HOME,
                weibo
            })
        })
    }
}
