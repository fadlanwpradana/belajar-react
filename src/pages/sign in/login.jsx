import React, { useState } from "react";
import "../../style/login.css";
import Navigation from "../../component/navbar/Navigation";
import { Link } from "react-router-dom";
import { authService } from "../../service/authentication/authService";
import Swal from "sweetalert2";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  // Handle input changes
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Toggle password visibility
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = form;

    // --- Validations ---
    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Username or Email cannot be empty",
      });
      return;
    }

    if (!password || password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Password cannot be empty and must be at least 8 characters",
      });
      return;
    }

    try {
      const res = await authService.login(form);

      Swal.fire({
        icon: "success",
        title: `Login Success!`,
        text: `Welcome Back, ${res?.data?.name}!`,
        showConfirmButton: false,
        // timer: 1500,
      });

      // Reset form
      setForm({ email: "", password: "" });
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || err?.message || "Login Failed";

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errorMessage,
        showConfirmButton: false,
      });
    }
  };

  return (
    <>
      <Navigation />
      <div className="body">
        <div className="login-container">
          <h1>Welcome Back</h1>
          <p>Please log in to manage your appointments</p>

          <form className="login-form" id="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input
              className="input-password"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password must be min 8 characters"
              value={form.password}
              onChange={handleChange}
            />

            <div className="btn-show-password">
              <input
                id="checkbox"
                type="checkbox"
                checked={showPassword}
                onChange={togglePassword}
              />
              <label htmlFor="checkbox">
                <small>Show Password</small>
              </label>
            </div>

            <button type="submit" id="btnFind">
              Login
            </button>

            <p className="signup-link">
              Don’t have an account?{" "}
              <Link className="nav-link" to="/Register">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
