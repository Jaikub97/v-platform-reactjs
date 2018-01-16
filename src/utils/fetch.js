import axios from 'axios'

var instance = axios.create({
  baseURL: 'http://gank.io/api/data/',
  timeout: 1000,
});

export default instance;