import axios from "axios";

const axiosPrivate = axios.create({
  baseURL: 'http://petlog.kubernetes.lan/api/v1',
  headers: {
    'Accept': 'application/json'
  }
});

export default axiosPrivate;
