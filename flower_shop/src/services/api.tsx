import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/flowers",
  timeout: 4000,
});

export default axiosInstance;
