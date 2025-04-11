import axios from "axios";

const axiosPublic = axios.create({
  baseURL: 'https://petlog.unnerv.xyz/api/v1',
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
