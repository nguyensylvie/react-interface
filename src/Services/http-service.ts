import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 60000,
});

instance.interceptors.request.use(
  async function(config) {
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error.response);
  }
);

export default instance;