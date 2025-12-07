import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../component/navbar/Navigation";
import "../../style/register.css";

const Signup = () => {
  return (
    <>
      <Navigation></Navigation>
      <div>
        <div class="signup-container">
          <h1>Create Account</h1>
          <p>Join Kingsman and manage your appointments with ease</p>

          <form class="signup-form" id="signupform">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
            />

            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="user@example.com"
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
              id="password1"
              name="password1"
              placeholder="Password must be min 8 characters"
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
