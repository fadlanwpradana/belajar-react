// api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://grohosbouu-kingsman-v1.vercel.app/api/auth",
  timeout: 8000,
  headers: { "Content-Type": "application/json" },
});

export default api;
