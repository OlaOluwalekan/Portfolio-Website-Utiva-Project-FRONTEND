import axios from 'axios'

const customFetch = axios.create({
  baseURL: 'https://bellsarena.onrender.com/api/v1',
  // baseURL: 'http://localhost:9000/api/v1',
})

export default customFetch
