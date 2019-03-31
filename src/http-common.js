import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:8080/aptinfo-backend',
  headers: {
      'Content-type': 'application/json'
    }
})
