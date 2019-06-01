import types from '../actions/ActionTypes'
import storage from '../global'
export default function loginOut() {
    console.log('login out')
    return (dispatch)=>{
        removeUserInfo()
        // .then(()=>{
        //     dispatch({
        //         type:types.LOGIN_OUT
        //     })
        // })
        dispatch({
            type: types.LOGOUT
        })
    }
}

async function removeUserInfo() {
    try {
        storage.remove({key:'userInfo'})
    } catch (error) {
        console.log(error)
    }
}