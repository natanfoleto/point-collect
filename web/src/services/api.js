import axios from 'axios';

const api = axios.create({
  baseURL: 'http://52.45.46.210:3333'
});

export default api;