import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'http://192.168.0.150:3001',
});

api.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
