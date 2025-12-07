import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../component/navbar/Navigation";
import "../../style/register.css";
import { authService } from "../../service/authentication/authService";
import Swal from "sweetalert2";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password2: "", // for validation only
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, password2 } = form;

    // --- Validations ---
    if (!name || !email || !password || !password2) {
      Swal.fire({ icon: "error", title: "All fields are required" });
      return;
    }

    if (!validateEmail(email)) {
      Swal.fire({ icon: "error", title: "Invalid email format" });
      return;
    }

    if (password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Password must be at least 8 characters",
      });
      return;
    }

    if (password !== password2) {
      Swal.fire({ icon: "error", title: "Passwords do not match" });
      return;
    }

    try {
      // --- Send only API-required fields ---
      await authService.register({ name, email, password });

      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: `Welcome ${name}!`,
        showConfirmButton: false,
        // timer: 1500,
      });

      // --- Reset form ---
      setForm({ name: "", email: "", password: "", password2: "" });
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || err?.message || "Registration Failed";

      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
        showConfirmButton: false,
      });
    }
  };

  return (
    <>
      <Navigation />
      <div className="signup-container">
        <h1>Create Account</h1>
        <p>Join Kingsman and manage your appointments with ease</p>

        <form className="signup-form" id="signupform" onSubmit={handleSubmit}>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Username"
            value={form.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="user@example.com"
            value={form.email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password must be min 8 characters"
            value={form.password}
            onChange={handleChange}
          />

          <label htmlFor="password2">Repeat Password</label>
          <input
            type="password"
            id="password2"
            name="password2"
            placeholder="Confirm Password"
            value={form.password2}
            onChange={handleChange}
          />

          <button type="submit" id="submit">
            Sign Up
          </button>

          <p className="login-link">
            Already have an account?{" "}
            <Link className="nav-link" to="/Login">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
