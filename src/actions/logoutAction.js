import types from '../actions/ActionTypes'
export function loginOut() {
    console.log('login out')
    return (dispatch)=>{
        removeUserInfo()
        .then(()=>{
            dispatch({
                type:types.LOGIN_OUT
            })
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