import { getMyWeibo } from '../api/index'  
import types from './ActionTypes'
function getMyWeiboAction(page,count) {
    return dispatch => {
        getMyWeibo(page,count).then(myWeibo => {
            dispatch({
                type: types.GET_MY_WEIBO,
                myWeibo
            })
            console.log(`我的微博${myWeibo}`)
        })
    }
}

export default getMyWeiboAction