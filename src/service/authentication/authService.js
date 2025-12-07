import api from "../api/axios";

export const authService = {
  async register(data) {
    const res = await api.post("/register", data);
    return res.data;
  },

  async login(data) {
    const res = await api.post("/login", data);
    const token = res.data.token;

    // Save token
    localStorage.setItem("token", token);

    return res.data;
  },

  logout() {
    localStorage.removeItem("token");
  },

  getToken() {
    return localStorage.getItem("token");
  },
};
