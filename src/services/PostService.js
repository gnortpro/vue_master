import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://x3english.com/wp-json/wp/v2',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPost(id) {
    return apiClient.get('/posts/' + id)
  }
}
