import axios from "axios";
const axiosClient = axios.create({
    baseURL: 'https://localhost:4000',
    headers: { 'content-type': 'application/json'}
})

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error?.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosClient