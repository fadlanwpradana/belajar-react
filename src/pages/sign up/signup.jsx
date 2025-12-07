import {React,useState} from "react";
import { Link } from "react-router-dom";
import Navigation from "../../component/navbar/Navigation";
import "../../style/register.css";
import { authService } from "../../service/authentication/authService";
import Swal from "sweetalert2";


const Signup = () => {
  const [form, setForm] = useState({name: "" , email: "", password: "" });
  
    const handleChange = (e) =>
      setForm({ ...form, [e.target.name]: e.target.value });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await authService.register(form);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Login successful!",
          // timer: 1500,
          showConfirmButton: false,
        });
      } catch (err) {
        const errorMessage =
          err?.response?.data?.message || err?.message || "Invalid login";
  
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
      <Navigation></Navigation>
      <div>
        <div class="signup-container">
          <h1>Create Account</h1>
          <p>Join Kingsman and manage your appointments with ease</p>

          <form class="signup-form" id="signupform" onSubmit={handleSubmit}>
            <label for="username">Username</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Username"
              onChange={handleChange}
            />

            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="user@example.com"
              onChange={handleChange}
            />

            <label for="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="08xxxxxxxxxx"
            />

            <label for="password1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password must be min 8 characters"
              onChange={handleChange}
            />

            <label for="password2">Repeat Password</label>
            <input
              type="password"
              id="password2"
              name="password2"
              placeholder="Password must be valid"
            />

            <div class="btn-show-password">
              <input id="checkbox" type="checkbox" />
              <label for="checkbox">
                <small>Show Password</small>
              </label>
            </div>

            <button type="submit" id="submit">
              Sign Up
            </button>
            <p class="login-link">
              Already have an account?{" "}
              <Link className="nav-link" to="/Login">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
