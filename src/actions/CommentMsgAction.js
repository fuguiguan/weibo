import types from './ActionTypes'
import { getCommentAboutMe } from '../api/index'  
function getCommentAboutMeAction(page,count) {
    return dispatch => {
        getCommentAboutMe(page,count).then(myComment => {
            dispatch({
                type: types.GET_MY_COMMENT,
                myComment
            })
            console.log(`与我相关的评论消息${myComment}`)
        })
    }
}

export default getCommentAboutMeAction