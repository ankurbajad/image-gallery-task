import axios from 'axios';

const API = axios.create({
    baseURL: 'https://picsum.photos/v2'
});
export default API;