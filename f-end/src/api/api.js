import axios from "axios";

const api = axios.create({
  baseURL: "https://password-manager-backend.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
