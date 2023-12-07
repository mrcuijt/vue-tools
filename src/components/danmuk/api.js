import { api } from '@/plugin/request.js'

function getContent (url, params) {
  return api.postJson(url, params)
}

export { getContent }
