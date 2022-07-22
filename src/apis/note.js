import request from "../helpers/request";

const URL = {
  ADD: '/notes/to/:notebookId',
  GETALL: '/notes/from/:notebookId',
  DELETE: '/notes/:noteId',
  MODIFY: '/notes/:noteId',
}

export default {
  add({title, content}) {
    request(URL.ADD, 'POST', { title, content })
  },
  get() {
    request(URL.GET)
  },
  delete() {
    return request(URL.DELETE, 'DELETE')
  },
  modify({title, content}) {
    return request(URL.UPDATE, 'PATCH', { title, content })
  }
}