import types from './ActionTypes';
import storage from '../global'
import { getAccess_token, getUserInfo, get_token_info, getUid, getCode} from '../api/index';
 function login(code) {
    return (dispatch) => {
        //发送开始登陆的消息
        console.log('login start')
        dispatch({
            type:types.LOGIN_START
        })
 
        fetchUserInfo(code)
        .then((userInfo) => {
            console.log(`登陆成功---:${userInfo}`)
            saveUserInfo(userInfo)
            dispatch({
                type: types.LOGIN_SUECESS,
                userInfo
            })
        })
        .catch((err) => {
            console.log(`登陆失败--${err}`)
            removeUserInfo()
            dispatch({
                type: types.LOGIN_FAIL
            })
        })
    }
}

async function fetchUserInfo(code) {
    //拿到合法的token
    let token = null
    if(code) {
        token =  await getAccess_token(code)
    } else {
        const {access_token} = await storage.load({key:'userInfo'})
        const responseJson = await get_token_info(access_token)
        token = {...responseJson, access_token}
    }
    //使用token拿到userInfo
    const {uid} = await getUid(token.access_token)
    const userInfo = await getUserInfo(token.access_token, uid)
    return {...userInfo, access_token:token.access_token, uid}
}
async function savaTokenInfo(tokenInfo) { // 只包含token相关信息
    try {
        storage.save({
            key:'tokenInfo',
            data: tokenInfo
        })
    } catch (error) {
        console.log(error)
    }

}
async function removeTokenInfo() {
    try {
        storage.remove({key:'tokenInfo'})
    } catch (error) {
        console.log(error)
    }
}

async function saveUserInfo(userInfo) { // 单纯的userInfo信息
    try {
        storage.save({
            key:'userInfo',
            data: userInfo
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
export default login;