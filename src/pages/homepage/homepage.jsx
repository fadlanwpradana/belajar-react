import React from "react";
import logo from "../../assets/fototoko.png";
import "../../style/homepage.css";
import Navigation from "../../component/navbar/Navigation";

const Homepage = () => {
  return (
    <>
      <Navigation></Navigation>
      <div>
        <img src={logo} alt="logo" />
        <div class="hero">
          <div class="hero-text">
            <h1>Welcome to Kingsman Barbershop</h1>
            <p>Where timeless style meets modern precision</p>
            <a href="booking.html" class="cta-button">
              Book Now
            </a>
          </div>
        </div>

        <div class="intro">
          <h2>Why Choose Kingsman?</h2>
          <p>
            We offer premium grooming services in a space designed for
            gentlemen. From classic cuts to modern fades, our expert barbers
            deliver style with precision and care.
          </p>
        </div>

        <div class="features">
          <div class="feature-card">
            <h3>✂️ Signature Cuts</h3>
            <p>
              Tailored hairstyles that reflect your personality and lifestyle.
            </p>
          </div>
          <div class="feature-card">
            <h3>🧔 Beard Styling</h3>
            <p>
              Sharp lines, clean trims, and sculpted beards for a bold look.
            </p>
          </div>
          <div class="feature-card">
            <h3>🛋️ Relaxing Atmosphere</h3>
            <p>Vintage-inspired interiors with warm hospitality and comfort.</p>
          </div>
        </div>

        <div class="footer">
          <p>&copy; 2025 Kingsman Barbershop | Cikarang Utara, Jawa Barat</p>
        </div>
      </div>
    </>
  );
};

export default Homepage;
