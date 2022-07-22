import axios from 'axios'
import { Message } from 'element-ui';


axios.defaults.baseURL = '//blog-server.hunger-valley.com';
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
    if(localStorage.token) {
      axios.defaults.headers.common['Authorization']  = localStorage.token
    }
 
    axios(option)
    .then(res => {
      console.log(res.data,'...')
      if(res.data.status === 'ok') {
        if(res.data.token) {
          localStorage.token = res.data.token
        }
        resolve(res.data)
      }else{
        reject(res.data)
      }
    }).catch(err => {
      Message.error('网络异常')
      reject({ msg: '网络异常' })
    })
  })
}

