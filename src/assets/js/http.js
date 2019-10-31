import axios from 'axios';
import { Message } from 'element-ui';
import router from "../../router";
import CryptoJS from 'crypto-js/crypto-js'

axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    //重置token
    localStorage.setItem("TOKEN", response.headers.unicenter_authorization);
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  var data = JSON.parse(res.data);

  if (res.status === -404) {
      data.success = error(res.status);
      return data;
  }
  
  if (data && (data.code != "200")) {
      data.success = error(data);
      return data;
  }
  data.success = true;
  return data;
}

function error (data) {
  var code = data.code;
  //验证通信
  if (code === -404) {
        Message({
          showClose: true,
          message: '通信异常',
          type: 'error',
          duration:0,
          center: true
        });
        return false;
  }
  //验证token ，token失效,清除所有的登陆信息,
  if (code === "400") {
        localStorage.clear();
        router.push({path: "/login"});
        return false;
  }
  //验证服务
  if (code !== "200" ) {
        Message({
          showClose: true,
          message: data.msg,
          type: 'error',
          duration:0,
          center: true
        });
        return false;
  }
  return true;
}

function getEnum(response, key) {
  return response.data[key].enum;
}



// 加密
function encryptedData(data) {
  const KEY = CryptoJS.enc.Utf8.parse("dAoABHzVrNLNff3F");
  const IV = CryptoJS.enc.Utf8.parse('kNyd1BcbEk5BmguR');
  let key = KEY
  let iv = IV

  let srcs = CryptoJS.enc.Utf8.parse(data);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  });
 // console.log("-=-=-=-", encrypted.ciphertext)
  return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
}

// 解密
function decryptData(data){
  const KEY = CryptoJS.enc.Utf8.parse("dAoABHzVrNLNff3F");
  const IV = CryptoJS.enc.Utf8.parse('kNyd1BcbEk5BmguR');
  let key  = KEY
  let iv = IV

  let base64 = CryptoJS.enc.Base64.parse(data);
  let src = CryptoJS.enc.Base64.stringify(base64);

  var decrypt = CryptoJS.AES.decrypt(src, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  });
  var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

export default {
  post (url, data) {
    return axios({
      method: 'post',
      baseURL: '/api',
      url,
      data: encryptedData(JSON.stringify(data)),
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;charset=UTF-8',
        'unicenter_authorization': localStorage.getItem("TOKEN"),
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  upload (url, data) {
    return axios({
      method: 'post',
      baseURL: '/api',
      url,
      data: JSON.stringify(data),
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;charset=UTF-8',
        'unicenter_authorization': localStorage.getItem("TOKEN"),
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  get (url, params) {
    return axios({
      method: 'get',
      baseURL: '/api',
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'unicenter_authorization': localStorage.getItem("token"),
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },

  enum (key) {
    var url = "";
    var params = {};
    return axios({
      method: 'get',
      baseURL: '/enum.json',
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (response) => {
        return getEnum(response, key)
      }
    )
  }
}