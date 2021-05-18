import axios from 'axios'

//Configuration de base pour les appels API
export default axios.create({
  baseURL: 'http://192.168.0.12:8080',
  headers: {
    'Content-Type': 'application/json',
  }
})