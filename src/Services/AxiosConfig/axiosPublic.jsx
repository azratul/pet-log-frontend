import axios from "axios";

const axiosPublic = axios.create({
  baseURL: 'http://petlog.kubernetes.lan/api/v1',
  headers: {
    'Accept': 'application/json'
  }
});

axiosPublic.defaults.xsrfCookieName = 'jwt'

axiosPublic.interceptors.request.use(
  async (config) => {
    config.withCredentials = true;

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosPublic;
