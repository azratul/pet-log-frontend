import axios from "axios";

const axiosPrivate = axios.create({
  baseURL: 'https://petlog.unnerv.xyz/api/v1',
  headers: {
    'Accept': 'application/json'
  }
});

export default axiosPrivate;
