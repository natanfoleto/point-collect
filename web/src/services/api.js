import axios from 'axios';

const api = axios.create({
  baseURL: 'http://18.222.249.54:3333'
});

export default api;