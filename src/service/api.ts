import axios from 'axios'

const api = axios.create({
    baseURL: 'https://fruits-api-tsi.herokuapp.com'
})

export default api