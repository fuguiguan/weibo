import types from './ActionTypes';
import { AsyncStorage } from 'react-native'
import { QS } from 'qs'
import { getAccess_token, getUserInfo, get_token_info, getUid, getCode} from '../api/index';
 function login(code) {
    return (dispatch) => {
        //发送开始登陆的消息
        dispatch({
            type:types.LOGIN_START
        })
        getAccess_token(code)
        .then(data =>{
            let keys = Object.keys(data);
            alert(keys)
        } )
        .finally(a=>alert('finally',a))
        
    }
}
export default login;