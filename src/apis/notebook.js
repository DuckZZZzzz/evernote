import request from "../helpers/request";

const URL = {
  GET: '/notebooks',
  ADD: '/notebooks',
  MODIFY: '/notebooks/:notebookId',
  DELETE: '/notebooks/:notebookId'
}

export default {
  add({title}) {
    return request(URL.ADD, 'POST', { title })
  },
  get() {
    return request(URL.GET)
  },
  delete() {
    return request(URL.DELETE, 'DELETE')
  },
  modify({title}) {
    return request(URL.MODIFY, 'PATCH', { title })
  }
}