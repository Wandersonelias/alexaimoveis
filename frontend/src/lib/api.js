import { getCookie, removeCookie, setCookie } from '@/utils/Utils';
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.wandersonelias.com.br'
})
api.defaults.headers.common['Authorization'] = `${getCookie('token')}`;
api.interceptors.response.use((response) => {
  if (response.request.responseURL.includes('login')) {
    const token = response.data.token
    setCookie('token', token)
    api.defaults.headers.common['Authorization'] = `${token}`;
  }
  if (getCookie('token')) {
    api.defaults.headers.common['Authorization'] = `${getCookie('token')}`;
  }
  return response;
}, function (error) {
  if (error.response.status === 401) {
    removeCookie('token')
    window.location.href = '/auth/login'
  }
  return Promise.reject(error);
});
export default api