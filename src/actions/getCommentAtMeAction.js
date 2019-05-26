import types from './ActionTypes'
import { getCommentAtMe } from '../api/index'
export default function getCommentAtMeAction(page,count) {
    return dispatch => {
       getCommentAtMe(page,count).then(commentAtMe => {
           dispatch({
               type: types.GET_COMMENT_AT_ME,
               commentAtMe
           })
           console.log(CommentAtMe)
       })
    }
}
