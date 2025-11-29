import React from "react";
import "../../style/styling.css";
import image1 from "../../assets/taper-cut.jpg";
import image2 from "../../assets/skin-fade.jpg";
import image3 from "../../assets/Beard-sclupting.jpg";
import image4 from "../../assets/Pompadour.webp";
import Navigation from "../../component/navbar/Navigation";


const Style = () => {
  return (
    <>
    <Navigation></Navigation>
      <div>
        <div class="style-header">
          <h1>Signature Styles</h1>
          <p>Discover our most requested cuts and grooming looks</p>
        </div>

        <div class="style-gallery">
          <div class="style-card">
            <img src={image1} alt="logo" />
            <h2>Classic Taper</h2>
            <p>Timeless and clean, perfect for a gentleman’s daily look.</p>
          </div>

          <div class="style-card">
            <img src={image2} alt="logo" />
            <h2>Skin Fade</h2>
            <p>
              Sharp and modern, with a smooth transition from skin to style.
            </p>
          </div>

          <div class="style-card">
            <img src={image3} alt="logo" />
            <h2>Beard Sculpting</h2>
            <p>Defined edges and volume for a bold, masculine finish.</p>
          </div>

          <div class="style-card">
            <img src={image4} alt="logo" />
            <h2>Pompadour</h2>
            <p>Retro-inspired volume with a sleek, polished crown.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style;
