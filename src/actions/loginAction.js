import types from './ActionTypes';
import { getAccessToken, getUserInfo, getUserTokenInfo, getUid} from '../api/index';
export function loginAction(code) {
    return (dispatch)=>{
        //发送开始登陆的消息
        dispatch({
            type:types.LOGIN_START
        })

        fetchUserInfo(code)
        .then((userInfo)=>{
            //登陆成功
            // console.log(`登陆成功---token:${userInfo.access_token}--uid:${userInfo.uid}--info:${JSON.stringify(userInfo.userInfo)}`)
            saveUserInfo(userInfo)
            dispatch({
                type:types.LOGIN_SUCCESS,
                userInfo
            })
        })
        .catch((error)=>{
            // console.log(error)
            //登陆失败
            // console.log('login error')
            removeUserInfo()
            dispatch({
                type:types.LOGIN_FAIL
            })
        })
    }
}

export function logoutAction() {
    // console.log('login out')
    return (dispatch)=>{
        removeUserInfo()
        .then(()=>{
            dispatch({
                type:types.LOGOUT
            })
        })
    }
}

async function fetchUserInfo(code) {
    //拿到合法的token
    let token = null
    if(code) {
        token =  await getAccessToken(code)
    } else {
        const {access_token} = await storage.load({key:'userInfo'})
        const responseJson = await getUserTokenInfo(access_token)
        token = {...responseJson, access_token}
    }
    //使用token拿到userInfo
    const {uid} = await getUid(token.access_token)
    const userInfo = await getUserInfo(token.access_token, uid)
    return {access_token:token.access_token, uid, userInfo}
}

async function saveUserInfo(info) {
    try {
        storage.save({
            key:'userInfo',
            rawData: info
        })
    } catch (error) {
        console.log(error)
    }
}

async function removeUserInfo() {
    try {
        storage.remove({key:'userInfo'})
    } catch (error) {
        console.log(error)
    }
}