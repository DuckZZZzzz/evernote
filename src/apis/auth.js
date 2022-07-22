import request from "../helpers/request";

const URL = {
  REGISTER: '/auth/register',
  AUTH: '/auth',
  LOGOUT: '/auth/logout',
  LOGIN: '/auth/login'
}

export default {
  register({username, password}) {
    return request(AUTH.REGISTER, 'POST', {username, password})
  },
  auth() {
    return request(URL.AUTH)
  },
  logout() {
    return request(URL.LOGOUT)
  },
  login({username, password}) {
    return request(URL.LOGIN, 'POST', { username, password })
  }
}