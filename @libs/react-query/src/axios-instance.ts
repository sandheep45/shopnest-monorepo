import axios from "axios";

const baseURL = "http://localhost:3001";

const axiosInstance = axios.create({
  baseURL,
  headers: {},
});

export default axiosInstance;
