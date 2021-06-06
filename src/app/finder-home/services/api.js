import axios from './axios'
const END_POINT='books/v1/volumes'
function getBooks (inputValue) {
    return axios.get(`${END_POINT}?q=${inputValue}`)
}
export default getBooks