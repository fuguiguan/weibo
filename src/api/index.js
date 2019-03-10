import axios from 'axios';
import url from 'url';
const baseUrl = 'https://api.weibo.com/';
const redirect_uri = 'https://fuguiguan.cn';
const client_id = '3207738322';
const client_secret = 'ce4d00ccd2710065986ef7fe5ac15c64'
const oauth2Url = baseUrl + 'oauth2/';

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
export function getAuthURL() {
  let path = oauth2Url + 'authorize';
  return axios({
    method: 'get',
    url: path,
    data: {
      client_id: client_id,
      redirect_uri: redirect_uri
    }
  }).then((res) =>{
    return Promise.resolve(res.data)
  }).catch((err) =>{
    return Promise.reject(err)
  });
}

/*
获取请求access_token的code
*/
export function getCode(state) {
  let urlObj = url.parse(state.url,true);
  if (urlObj.pathname === url.parse(redirect_uri).pathname) {
    return urlObj.query.code;
  }
  return 0;
}

/**
 * 获取access_token
 */
export function getAccessToken(code) {
  let path = oauth2Url + 'access_token';
  return axios({
    method: 'post',
    url: path,
    data: {
      client_id: client_id,
      client_secret: client_secret,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirect_uri
    }
  }).then((res) => {
    return Promise.resolve(res.data);
  }).catch((err) => {
    return Promise.reject(err);
  });
}

/**
 * 查询用户access_token的授权相关信息，包括授权时间，过期时间和scope权限。
 */
export function getUserTokenInfo(access_token) {
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