import axios from "axios";

const api = axios.create({
  baseURL: "http://paixaodecristorsa.site:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Função para adicionar o token JWT em todos os pedidos
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
