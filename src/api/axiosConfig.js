import axios from "axios";

// VITE_API_BASE_URL is the only knob for switching environments
// (local, staging, production). Keep `http://127.0.0.1:4000` as the
// fallback so a fresh checkout without an .env still hits the local
// dev server. See .env.example for the documented variable.
const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:4000';

const axiosClient = axios.create({
    baseURL,
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