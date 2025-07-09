import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api/', // Update this if deployed
});

export default API;
