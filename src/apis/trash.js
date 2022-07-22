import request from "../helpers/request";

const URL = {
  GET: '/notes/:noteId/confirm',
  DELETE: '/notes/:noteId/revert',
  REVERT: '/notes/trash'
}

export default {
  get() {
    return request(URL.GET)
  },
  delete() {
    return request(URL.DELETE, 'DELETE')
  },
  revert() {
    return request(URL.REVERT, 'PATCH')
  }
}