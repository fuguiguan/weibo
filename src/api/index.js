import axios from 'axios';
import url from 'url';
import store from '../store/index'
import { logoutAction } from '../actions/loginAction';
import storage from '../global'
const baseUrl = 'https://api.weibo.com/';
const redirect_uri = 'http://www.baidu.com';
// const client_id = '3207738322'; // app key
// const client_secret = 'ce4d00ccd2710065986ef7fe5ac15c64'

const client_id = '213244275'
const client_secret= 'e3aef1922f8c7195c080b4b4981f72da'
const oauth2Url = baseUrl + 'oauth2/';

const QS = require('qs');
/*
给指定的URL添加请求参数
*/
function getUrlWithParams(path,params) {
  let url = path;
  if(params) {
    let paramsArray = [];
    Object.keys(params).forEach(key => paramsArray.push(key+'='+encodeURIComponent(params[key])));
    if (url.search(/\?/)===-1) { //如果开头没有？
      url += '?' + paramsArray.join('&');
    } else {
      url += '&' + paramsArray.join('&');
    }
  }
  return url;
}

/*
获取授权url
*/
// export function getAuthURL() {
//   let path = oauth2Url + 'authorize';
//   return axios({
//     method: 'get',
//     url: path,
//     data: {
//       client_id: client_id,
//       redirect_uri: redirect_uri
//     }
//   }).then((res) =>{
//     return Promise.resolve(res.data)
//   }).catch((err) =>{
//     return Promise.reject(err)
//   });
// }
export function getAuthURL() {
  let path = oauth2Url + "authorize"
  return getUrlWithParams(path, {
    client_id:client_id,
    redirect_uri:redirect_uri,
    forcelogin: true
  })
}


/*
获取请求access_token的code
*/
export function getCode(navState) {
  let urlObj = url.parse(navState.url,true);
  if (urlObj.pathname === url.parse(redirect_uri).pathname) {
    return urlObj.query.code;
  }
  return 0;
}

/**
 * 获取access_token
 */
// export function getAccess_token(code) {
//   let path = oauth2Url + 'access_token';
//   //   return axios({
//   //   method: 'post',
//   //   url: path,
//   //   data: {
//   //     client_id: client_id,
//   //     client_secret: client_secret,
//   //     grant_type: 'authorization_code',
//   //     code: code,
//   //     redirect_uri: redirect_uri
//   //   }
//   // })
//   let data = {
//     client_id: client_id,
//     client_secret: client_secret,
//     grant_type: 'authorization_code',
//     code: code,
//     redirect_uri: redirect_uri
// }
//   return axios.post(path,QS.stringify(data),{
//     "headers": {
//       'Content-Type': 'application/json',
//     }
//   }
//   .then(data => alert(11,data))
//   .catch(err =>alert(22,err))

//   )
//   // .then((res) => {
//   //   // return Promise.resolve(res.data);
//   //   // alert(1111);
//   //   return res.data;
//   // }).catch((err) => {
//   //   // return Promise.reject(err);
//   //   return err;
//   // });
// }

export function getAccess_token(code) {
  let path = oauth2Url + 'access_token'
  let url = getUrlWithParams(path, {
    client_id: client_id,
    client_secret: client_secret,
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirect_uri
  })
  return sendPostRequest(url, {})
}
// export function getAccess_token(code) {
//   let path = oauth2Url + 'access_token'
//   let url = getUrlWithParams(path, {
//     client_id: client_id,
//     client_secret: client_secret,
//     grant_type: 'authorization_code',
//     code: code,
//     redirect_uri: redirect_uri
//   })
//   return fetch(url).then(res => res.json())
//   .then(data => data)
//   .catch(err => err)
// }


/**
 * 查询用户access_token的授权相关信息，包括授权时间，过期时间和scope权限。
 */
export function get_token_info(access_token) {
  let path = oauth2Url + 'get_token_info';
  return axios({
    method: 'post',
    url: path,
    data: {
      access_token: access_token
    }
  }).then((res) => {
    return Promise.resolve(res.data);
  }).catch((err) => {
    return Promise.reject(err);
  });
}
// export function get_token_info(token) {
//   let path = oauth2Url + 'get_token_info'
//   let url = getUrlWithParams(path,{
//     access_token: token
//   })
//   return sendPostRequest(url, {})
// }


/**--------------------用户相关信息--------------------- */
const userUrl = baseUrl + '2/users/';
// export function getUserInfo(access_token) {
//   let path = userUrl + 'show.json';
//   return axios({
//     method: 'get',
//     url: path,
//     data: {
//       access_token: access_token
//     }
//   }).then((res) => {
//     return Promise.resolve(res.data);
//   }).catch((err) => {
//     return Promise.reject(err);
//   });
// }

export function getUserInfo(access_token, uid) {
  let path = userUrl + 'show.json'
  return sendGetRequest(path,{
    access_token,
    uid
  })
}


const accountUrl = baseUrl + '2/account/'
export function getUid(access_token) {
    let path = accountUrl + 'get_uid.json'
    return sendGetRequest(path,{
      access_token
    })
}

//--------------------------------公用数据----------------
function getCurAccessToken() {
  return store.getState().loginReducer.userInfo.access_token
}
// 从本地获取token
// function getLocalToken() {
//   let access_token = storage.load('access_token')
//   return access_token
// }

function getCurUid() {
  return store.getState().loginReducer.userInfo.uid
}

/**
 * -------------------  微博信息相关  -----------------------------
 */
//获取主页微博信息
const weiboUrl = baseUrl + '2/statuses/'
export function getWeibo(page, count) {
  let path = weiboUrl + 'home_timeline.json'
  return sendGetRequest(path,{
    access_token: getCurAccessToken(),
    page: page,
    count: count
  })
}


//获取评论列表
const commentsUrl = baseUrl + '2/comments/'
export function getComment(page, count, id){
  let path = commentsUrl + 'show.json'
  return sendGetRequest(path, {
    access_token: getCurAccessToken(),
    page,
    count,
    id
  })
}


/**
 * -------------------  get/post 请求  -----------------------------
 */


function sendGetRequest(url, params, headers = null) {
  return request(getUrlWithParams(url,params),{
    method: 'Get',
    headers: {
      'Accept': 'application/json'
    }
  })
}

function sendPostRequest(url,body,headers = null) {
  return request(url,{
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content': 'appliction/json'
    },
    body: JSON.stringify(body)
  })
}

class APIError extends Error {
  constructor(message,code,origin) {
    super(message);
    this.code = code;
    this.origin = origin;
  }
}

async function request(url,options) {
  const response = await fetch(url,options)
  const responseJson = await response.json()
  // if(response.status != 200){
  //   if (responseJson.error_code == 21332) {
  //     //token失效
  //     dispatch(logoutAction())
  //     throw new APIError(responseJson.error, responseJson.error_code, responseJson)
  //   }
  //   throw new APIError(responseJson.error, responseJson.error_code, responseJson)
  // }
  return responseJson;
}