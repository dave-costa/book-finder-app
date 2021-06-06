import axios from 'axios'
const httpClient = axios.create({
    baseURL: 'https://www.googleapis.com/',
    headers : {
        "Content-Type": "application/json"
    }
})
export default httpClient