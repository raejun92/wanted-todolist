import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080", // 기본 baseURL 설정
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");

    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default apiClient;
