import React from "react";
import logo from "../../assets/logoakun.png";
import "../../style/navigation.css";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div className="logo">
          <span>
            <a href="" target="main" onClick={() => navigate("/")}>
              <h1 class="Kingsman">KINGSMAN</h1>
            </a>
          </span>
        </div>
        <div>
          <ul class="navbar">
            <li>
              <a target="main" onClick={() => navigate("/style")}>
                Style
              </a>
            </li>
            <li>
              <a target="main" onClick={() => navigate("/")}>
                Barbers
              </a>
            </li>
            <li>
              <a target="main" onClick={() => navigate("/")}>
                Price List
              </a>
            </li>
            <li>
              <a target="main" onClick={() => navigate("/")}>
                Booking
              </a>
            </li>
            <li>
              <a target="main" onClick={() => navigate("/contactus")}>
                Contact Us
              </a>
            </li>
            <li>
              <a target="main" onClick={() => navigate("/")}>
                Our Merch
              </a>
            </li>
          </ul>
        </div>
        <div class="profile-icon">
          <a href="login.html" target="main">
            {" "}
            <img src={logo} alt="logo" className="accountimage" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
