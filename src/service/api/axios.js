// api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  timeout: 8000,
  headers: { "Content-Type": "application/json" },
});

export default api;
