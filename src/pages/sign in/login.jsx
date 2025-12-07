import { React, useState } from "react";
import "../../style/login.css";
import Navigation from "../../component/navbar/Navigation";
import { Link } from "react-router-dom";
import { authService } from "../../service/authentication/authService";
import Swal from "sweetalert2";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await authService.login(form);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Login successful!",
        // timer: 1500,
        showConfirmButton: false,
      });

      setMessage("Login successful!");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: err.message || "Invalid login",
      });

      setMessage(err.message || "Invalid login");
    }
  };

  return (
    <>
      <Navigation></Navigation>
      <div className="body">
        <div class="login-container">
          <h1>Welcome Back</h1>
          <p>Please log in to manage your appointments</p>

          <form class="login-form" id="loginForm" onSubmit={handleSubmit}>
            <label for="email">Username or Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Username or Email"
              onChange={handleChange}
            />

            <label for="password">Password</label>
            <input
              class="input-password"
              type="password"
              id="password"
              name="password"
              placeholder="Password must be min 8 characters"
              onChange={handleChange}
            />

            <div class="btn-show-password">
              <input id="checkbox" type="checkbox" onchange="showPassword()" />
              <label for="checkbox">
                <small>Show Password</small>
              </label>
            </div>

            <button type="submit" id="btnFind" onclick="loginForm()">
              Login
            </button>

            <p class="signup-link">
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
