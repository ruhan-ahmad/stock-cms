import axios from "axios";
const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:4000',
    headers: { 'content-type': 'application/json'}
})

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error?.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosClient