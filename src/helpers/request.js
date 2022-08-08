import axios from 'axios'
import { Message } from 'element-ui';
import baseURLConfig from './config-baseURL'

axios.defaults.baseURL = baseURLConfig.baseURL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true
//一些通用的配置可以在axios.defaults里写好

export default function request(url, type='GET', data={}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type,
      validateStatus(status) {
        return (status >=200 && status < 300) || status === 400
      }
    }
    if(type.toLowerCase() === 'get') {
      option.params = data
    }else {
      option.data = data
    }
    axios(option)
    .then(res => {
      console.log(res)
      //一定先自己打印一下res确保后面的判断条件不会写错
      if(res.status === 200) {
        resolve(res.data)
      }else{
        reject(res.data)
        Message.error(res.data.msg)
      }
    }).catch(err => {
      Message.error('网络异常')
      reject({ msg: '网络异常' })
    })
  })
}

